#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApprunnerSampleStack } from '../lib/apprunner-sample-stack';

const app = new cdk.App();
new ApprunnerSampleStack(app, 'ApprunnerSampleStack');
