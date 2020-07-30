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
        DispatchQueue.main.async {
            let countdownViewController = CountdownViewController()
            self.bridge.viewController.present(countdownViewController, animated: true, completion: nil)
            call.resolve()
        }
    }
    
}
