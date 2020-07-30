//
//  CountdownPlugin.m
//  App
//
//  Created by Cesar Augusto Hurtado Zapata on 30/07/20.
//
#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(CountdownPlugin, "CountdownPlugin",
  CAP_PLUGIN_METHOD(initCountdown, CAPPluginReturnPromise);
)
