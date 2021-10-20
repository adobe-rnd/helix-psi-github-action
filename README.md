# Helix Actions - Page Speed Insights (PSI)
## Status
[![codecov](https://codecov.io/gh/adobe-rnd/helix-psi-github-action/branch/main/graph/badge.svg?token=N7RBLVWRSA)](https://codecov.io/gh/adobe-rnd/helix-psi-github-action)

## About
The Helix PSI Action is designed to look at an incoming PR, audit it against the Page Speed Insights API, and report the results. If any threshold is not reached, the action will run a second time.

## Usage

### Requirements
1. A Helix Pages (`hlx3` to be exact) repository.
2. A Google Page Speed Insights API Key. Get your own [here](https://developers.google.com/speed/docs/insights/v5/get-started).

### Sample Workflow

```yml
name: Run Helix PSI Audit

on:
  pull_request:
    types: [opened, synchronize, reopened, edited]
    branches:
      - main

jobs:
  action:
    runs-on: ubuntu-latest

    steps:
      - name: Use repo PSI action
        uses: adobe-rnd/helix-psi-github-action@main
        with:
          psi-key: ${{ secrets.PSI_KEY }}

```
### Optional inputs
For a full list of optional inputs for your workflow, please see [action.yml](https://github.com/adobe-rnd/helix-psi-github-action/blob/main/action.yml).

## Running tests
The tests do hit the Page Speed Insights API. To run them locally:

```bash
PSI_KEY='{{YOUR_PSI_API_KEY}}' npm run test
```
