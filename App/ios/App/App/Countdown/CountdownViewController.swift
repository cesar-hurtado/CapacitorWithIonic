//
//  CountdownViewController.swift
//  App
//
//  Created by Cesar Augusto Hurtado Zapata on 30/07/20.
//

import UIKit

class CountdownViewController: UIViewController {
    let viewName = "CountdownViewController"
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: viewName, bundle: nil)
        self.modalPresentationStyle = .fullScreen
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func dismiss(_ sender: Any) {
        self.dismiss(animated: true, completion: nil)
    }
}
