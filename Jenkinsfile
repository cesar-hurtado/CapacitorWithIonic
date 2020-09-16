pipeline {
    agent any

    environment {
        PATH='/usr/local/bin:/usr/bin:/bin'
	}

    stages {
        stage("Checkout") {
        checkout scm
    }

        stage("Prepare") {
            sh 'npm install'
            sh "ionic cap copy ios"
            sh "npx cap update ios"
            sh 'rm -rf node_modules'
        }
    }
    
}