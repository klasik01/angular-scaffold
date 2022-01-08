echo "Running e2e test"
npm run test:e2e:clean
./scripts/wait-for-it.sh keycloak:8443 -t 0 -- cypress run
EXIT_CODE=$?
echo "Generate Cucumber HTML report"
npm run test:e2e:report:generate_cucumber_html_report
exit ${EXIT_CODE}
