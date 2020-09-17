def
ENVIRONMENT = 'production'
BUILD_CONFIGURATION = 'debug'
DISTRIBUTION_GROUP = 'Collaborators'
DISTRIBUTION_APP = 'cesar.hurtado/Sharetown-iOS-Jenkins'
APPCENTER_TOKEN = 'a630f052ac1f981500bdeb63f568dd4ab22b7432'

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
                    sh 'ionic cap copy ios --configuration ${ENVIRONMENT}'
                    sh 'npx cap update ios'
                    sh 'rm -rf node_modules'
                }
            }
        }

        stage('Build archive') {
            steps {
                dir('App') {
                    dir('ios') {
                        sh 'xcodebuild -workspace App/App.xcworkspace \
                            -scheme App clean archive -configuration ${BUILD_CONFIGURATION} \
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
                            -exportPath Build/${BUILD_CONFIGURATION}'
                    }
                }
            }
        }

        stage('Upload IPA to Appcenter') {
            steps {
                dir('App') {
                    dir('ios') {
                        sh 'appcenter login --token ${APPCENTER_TOKEN}'
                        sh 'appcenter distribute release -f Build/${BUILD_CONFIGURATION}/App.ipa -g ${DISTRIBUTION_GROUP} --app ${DISTRIBUTION_APP}'
                    }
                }
            }
        }
    }
    
}