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
        stage ('Check Environment') {
            steps {
                sh """
                    node --version
                    npm --version
                    git --version
                """
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
        }
    }
}