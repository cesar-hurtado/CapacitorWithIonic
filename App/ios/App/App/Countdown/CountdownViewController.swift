//
//  CountdownViewController.swift
//  App
//
//  Created by Cesar Augusto Hurtado Zapata on 30/07/20.
//

import UIKit

class CountdownViewController: UIViewController {
    
    public var initNumber = 1
    
    private var timer = Timer()
    private let viewName = "CountdownViewController"
    
    @IBOutlet weak var initNumberLabel: UILabel!
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: viewName, bundle: nil)
        self.modalPresentationStyle = .fullScreen
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        updateView(number: String(initNumber))
        initCountdown()
    }

    @IBAction func dismiss(_ sender: Any) {
        self.dismiss(animated: true, completion: nil)
    }
    
    private func initCountdown() {
        timer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(self.updateCounter), userInfo: nil, repeats: true)
    }
    
    @objc private func updateCounter() {
        if initNumber > 0 {
            initNumber -= 1
            updateView(number: String(self.initNumber))
        } else {
            timer.invalidate()
            self.dismiss(animated: true, completion: nil)
        }
    }
    
    private func updateView(number: String) {
        DispatchQueue.main.async {
            self.initNumberLabel.text = String(number)
        }
    }
}
