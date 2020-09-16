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
    }
    
}