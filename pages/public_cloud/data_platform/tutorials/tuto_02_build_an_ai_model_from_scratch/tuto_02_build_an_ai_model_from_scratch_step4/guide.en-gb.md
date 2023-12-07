---
title: Build your AI model from scratch on Data Platform - Step 4 - Select the best model
excerpt: ""
updated: 2023-11-30
---

<style>
.prevnext {
    display:flex !important;
    list-style:none !important;
    margin:25px 0 50px !important;
    padding:0 !important;
}
.prevnext > li {
    background:#efefef !important;
    border-radius:8px !important;
    box-shadow: 0 3px 13px 0 rgba(151, 167, 183, 0.3) !important;
    flex:1 !important;
    padding:5px 20px !important;
    position:relative !important;
}
.prevnext > li:empty {
    visibility:hidden !important;
}
.prevnext > li > h4 {
    color:#08c !important;
}
.prevnext > li > a {
    bottom:0 !important;
    left:0 !important;
    position:absolute !important;
    right:0 !important;
    top:0 !important;
}
.prevnext > li:first-child {
    margin:25px 10px 0 0 !important;
}
.prevnext > li:first-child > h4:before,
.prevnext > li:last-child > h4:before {
    color:rgba(0,0,0,.6) !important;
    content:"Previous step" !important;
    display:block !important;
    font-size:70% !important;
    margin-bottom:10px !important;
    text-transform:uppercase !important;
}
.prevnext > li:last-child {
    margin:25px 0 0 10px !important;
    text-align:right !important;
}
.prevnext > li:last-child > h4:before {
    content:"Next step" !important;
}
</style>

## Confirm your choice of model and deploy it

The Model Selection step is the **watchtower where you'll be able to control all models created by your pipeline over time**. Pipelines in the Data Platform are designed to live and evolve as new data is fed into your models, and as your models are trained, validated and tested. Keeping track of the model versions and score drift is essential for a production AI application.

### Manually deploy a model

The *Generated Models* table lists **all the models that have been trained and saved** since the pipeline was created. For the moment, you can only see one model. It is the best model that was returned by the hyper-parameter exploration in the previous step!

In order to limit the amount of resources used, the Data Platform doesn't automatically test your models with the testing dataset. You need to choose when to test your model. To do so, you can either press the pipeline's Play button and select the third option *'Testing'*, or manually click on the **refresh icon** for a specific model.

![machinelearning](images/validation-score-manually.png)

Now, it is time to deploy a model. To do this, click on the **Play icon** which is located on the right-hand side of the line of the model you wish to deploy.

![machinelearning](images/validation-deploy-manually.png)

It's that simple! Your model has been deployed, as indicated by the green atom icon next to its name, and is now available for predictions.

### Set automatic management options

#### Configure auto-deployment

As you have seen above, it is really easy to deploy a model. But, it’s still manual work! So, the Data Platform makes it even easier, by allowing you to auto-deploy your models. Once in production, if you are regularly gathering new data, this will save you the task of having to open the pipeline and manually launch the deployment.

The default criterion for deployment is the *best score over a period of time*. Leave it as it is. Simply note that you might also want to optimize the training or prediction time rather than only the score - this tab lets you do that too.

Set the time period to **14 days**.

![machinelearning](images/validation-autodeploy2.png)

Turn on **Automatic deployment**.

![machinelearning](images/validation-autodeploy.png)

Your pipeline will now automatically deploy the best model every 14 days. Naturally, this feature should be combined with an automatic re-train / re-score of the model, else the deployed model cannot possibly change.

#### Configure triggers

The remaining automation options, such as re-training, can be set through **triggers**. To do so you’ll need to go back to your pipeline main page. Click on the **X** button at the top-left.

> Note that pipelines autosave 💾! You can always exit and come back at any time.

![machinelearning](images/validation-exit.png)

As you can see, there are no triggered events yet. Click on **Add**.

![machinelearning](images/validation-add-trigger.png)

Name your trigger *Auto re-train*, give the description of your choice and click on **Jobs**.

![machinelearning](images/validation-add-trigger2.png)

You will now need to set up your pipeline so that it refreshes the training and the testing datasets with the latest gathered new data, and that it builds a new model to be trained. To do so, turn on the *Dataset Generation* and *Training* sliders. Then click on **Trigger**.

![machinelearning](images/validation-add-trigger3.png)

Let’s have the pipeline do this every 14 days. Select *Daily* and choose *Every 14 days*. Click on **Create** to close the window.

![machinelearning](images/validation-add-trigger4.png)

Your pipeline will now not only incorporate all new data for training and scoring every 14 days but it will also train a new model and automatically deploy the one with the best score.

<ul class="prevnext">
    <li>
        <h4>Hyper-parameter tuning</h4>
        <a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step3"></a>
    </li>
    <li>
        <h4>Deployment settings</h4>
        <a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step5"></a>
    </li>
</ul>