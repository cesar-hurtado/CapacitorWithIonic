pipeline {
    agent any

    environment {
        PATH='/usr/local/bin:/usr/bin:/bin'
	}

    stages {

        stage("Prepare") {
            sh 'npm install'
        }

        stage('IOS Build') {
          steps {
            sh 'ionic cap copy ios'
            sh 'npx cap update ios'
          }
       }
    }
    
}