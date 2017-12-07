pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage ('Checkout') {
            steps {
                checkout scm 
            }
        }
        stage ('Check environment') {
            steps {
                sh """
                    node --version
                    npm --version
                    git --version
                """
            }
        }
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Check linting') { 
            steps {
                sh 'ng lint' 
            }
        }
        // stage('Test') { 
        //     steps {
        //         sh 'npm run test' 
        //     }
        // }
    }
}