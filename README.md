# Beekeeping App

## Overview
The Beekeeping App is a mobile application designed to help beekeepers manage and track their hives efficiently. It stores information about each hive such as health and the details of the most recent inspection.

## Key Features

- **Apiary and Hive Management**: Users can add, edit, and delete hives. Hives can be assigned to an Apiary group for better organization.

- **Inspection Tracking**: Users can record and update inspection data, which includes date, detailed notes, and the option to add an image.

- **Themes**: Users can choose between a dark mode and light mode in the settings tab.

## Technology Stack

- **Front-end**: React Native, Styled Components, Context API for theme switching, Expo Managed
- **Back-end**: GraphQL API created with AWS Amplify Console.
- **Database**: AWS DynamoDB.

## Future Updates

- Authentication with AWS Cognito.
- Allow images to be uploaded using a signed URL for private access.
- Alerts/reminders: Users will be able to schedule a reminder to make an inspection.
- Filtering/Search: Users will be able to search for inspections and filter by date.

## Getting Started
To run this project locally, you will need to install [React Native](https://reactnative.dev/docs/environment-setup) and [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install/).

1. Clone the repo:
   cd beekeeping-app
3. Install dependencies:
   yarn install
4. run the app:
   npx expo start