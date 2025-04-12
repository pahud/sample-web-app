import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';

export class ApprunnerSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new apprunner.Service(this, 'SampleWebAppRunner', {
      source: apprunner.Source.fromGitHub({
        repositoryUrl: 'https://github.com/pahud/sample-web-app',
        branch: 'main',
        configurationSource: apprunner.ConfigurationSourceType.REPOSITORY
      }),
      serviceName: 'sample-web-app'
    });
  }
}
