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

        stage('IOS Build') {
            steps {
                dir('App') {
                    sh 'ionic cap copy ios'
                    sh 'npx cap update ios'
                }
            }
       }
    }
    
}