def ENVIRONMENT = 'production'
def BUILD_CONFIGURATION = 'debug'
def DISTRIBUTION_GROUP = 'Collaborators'
def DISTRIBUTION_APP = 'cesar.hurtado/Sharetown-iOS-Jenkins'
//APPCENTER_TOKEN = '3102a4b199239a453019e3a07ee3d9f60c4416bb'
def APPCENTER_TOKEN = '86d891238a9c8603b53a1322e22a7cca89f8db41'

pipeline {
    agent any

    environment {
        PATH='/usr/local/bin:/usr/bin:/bin'
        APPCENTER_ACCESS_TOKEN='${APPCENTER_TOKEN}'
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
                        sh 'appcenter distribute release -f Build/${BUILD_CONFIGURATION}/App.ipa -g ${DISTRIBUTION_GROUP} --app ${DISTRIBUTION_APP}'
                    }
                }
            }
        }
    }
    
}