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
                    // writeFile(file: 'coverage.txt', text: testOut)
                    // if (!isProd(env.BRANCH_NAME)){
                    // publishHTML (target: [
                    //         allowMissing: false,
                    //         alwaysLinkToLastBuild: false,
                    //         keepAll: true,
                    //         reportDir: "coverage",
                    //         reportFiles: "index.html",
                    //         reportName: "Code coverage report"
                    //     ])
                    // }
                }
            }
        }
    }
}
