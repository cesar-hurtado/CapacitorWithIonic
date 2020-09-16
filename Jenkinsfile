pipeline {
    agent any

    environment {
        PATH='/usr/local/bin:/usr/bin:/bin'
	}

    stages {

        stage("Prepare") {
            steps {
                dir('App') {
                    sh "npm install"
                }
            }
        }

        stage("Build iOS") {
            steps {
                dir('App') {
                    sh 'ionic cap copy ios'
                    sh 'npx cap update ios'
                }
            }
        }

        stage('Build archive') {
            steps {
                dir('App') {
                    dir('ios') {
                        sh 'xcodebuild -workspace App/App.xcworkspace \
                            -scheme App clean archive -configuration debug \
                            -sdk iphoneos -archivePath App.xcarchive'
                    }
                }
            }
        }

        stage('Build IPA') {
            steps {
                dir('App') {
                    dir('ios') {
                        sh 'xcodebuild -exportArchive -archivePath App.xcarchive \
                            -exportOptionsPlist ExportOptions.plist \
                            -exportPath Build'
                    }
                }
            }
        }

        stage('Upload IPA to Appcenter') {
            steps {
                dir('App') {
                    dir('ios') {
                        sh 'appcenter login --token a630f052ac1f981500bdeb63f568dd4ab22b7432'
                        sh 'appcenter distribute release -f Build/App.ipa -g Collaborators --app cesar.hurtado/Sharetown-iOS-Jenkins'
                    }
                }
            }
        }
    }
    
}