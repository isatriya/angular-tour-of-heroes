pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
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
                sh 'npm run lint' 
            }
        }
        // stage('Test') { 
        //     steps {
        //         sh 'npm run test' 
        //     }
        // }
    }
}