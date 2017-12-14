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
        stage('Unit test') {
            steps {
                script {
                    def testOut = sh(script: """
                    Xvfb :99 -screen 0 1024x768x16 &> xvfb.log &
                    export DISPLAY=:99.0
                    ps -ea
                    npm test
                    """, returnStdout: true).trim()
                    writeFile(file: 'coverage.txt', text: testOut)
                    publishHTML (target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "coverage",
                        reportFiles: "index.html",
                        reportName: "Code coverage report"
                    ])
                }
            }
        }
        stage('e2e test') {
            steps {
                sh """
                    (npm start &)
                    while ! nc -z 127.0.0.1 4200; do sleep 5; done
                """
            }
            steps {
                sh """
                    Xvfb :99 -screen 0 1024x768x16 &> xvfb.log &
                    export DISPLAY=:99.0
                    npm run webdriver:update
                    npm run protractor
                """
            }
        }
    }
}
