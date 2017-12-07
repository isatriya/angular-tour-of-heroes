pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage ('Checkout') {
            checkout scm
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