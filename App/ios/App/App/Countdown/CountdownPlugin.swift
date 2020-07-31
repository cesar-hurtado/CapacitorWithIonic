//
//  CountdownPlugin.swift
//  App
//
//  Created by Cesar Augusto Hurtado Zapata on 30/07/20.
//

import Foundation
import Capacitor

@objc(CountdownPlugin)
public class CountdownPlugin: CAPPlugin {
    
    @objc func initCountdown(_ call: CAPPluginCall) {
        
        guard let initNumber = call.options["initNumber"] as? Int else {
            call.reject("Must provide init number")
            return
        }
        DispatchQueue.main.async {
            let countdownViewController = CountdownViewController()
            countdownViewController.initNumber = initNumber
            self.bridge.viewController.present(countdownViewController, animated: true, completion: nil)
            call.resolve()
        }
    }
    
}
