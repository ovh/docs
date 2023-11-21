---
title: Build your AI model from scratch on Data Platform - Introduction
excerpt: ""
updated: 2023-11-01
---

<style>

/*

.project-step {
    margin-bottom:25px;
}
.landing-link {
    opacity: 0.95;
    text-decoration: none;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 3px 13px 0 rgba(151, 167, 183, 0.3);
    min-height: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    align-items: flex-start;
    margin: 15px 0;
    overflow:hidden;
    padding:10px;
}
.landing-link>img {
    border-radius:4px 0 0 4px;
    height:120px;
}
.landing-link>.text {
    flex: 1 1 auto;
    align-self: auto;
    padding-top:10px;
}
.landing-link>.text h2 {
    color: #0050D7;
    margin: 0;
    padding-left: 17px;
    padding-right: 17px;
    font-size: 20px;
}
.landing-link>.text p {
    margin: 4px 0 0;
    padding-left: 17px;
    padding-right: 17px;
    color:#000;
}

*/


.block-step {
   border-radius: 8px !important;
   background-color: #fff !important;
   box-shadow: 0 3px 13px 0 rgba(151, 167, 183, 0.3) !important;
   display:flex !important;
   margin: 10px 4px 25px !important;
   padding:15px 20px !important;
}
.block-step img {
   box-shadow:none !important;
   height:100px !important;
   margin:0 15px 0 0 !important;
   transition:none !important;
   width:100px !important;
}
.block-step h2 {
   line-height:1 !important;
   margin:0 !important;
   padding:10px 0 !important;
}
.block-step h2 a {
   color: #2199e8 !important;
   font-size:24px !important;
   font-weight:600 !important;
   text-decoration:none !important;
}
.block-step p {
   margin: -30px 0 5px 0 !important;
}
</style>


## Build your AI model from scratch on Data Platform

If you’ve been hearing about how Artificial Intelligence (AI) can help you make better business decisions and want to add more intelligence and machine learning to the data you have on hand, you're in the right place!

In this tutorial, you'll learn the basics about the ForePaas Platform Artificial Intelligence features. You'll create, train and deploy your own AI model **in less than 30 minutes**.

⛳️ The goal is to get you up to speed on how to use the AI features of the ForePaas Platform so that you can start operationalizing AI asap.

📥 No need to bring your own data or model, we provide them throughout the tutorial to accelerate the process.

If you have never used the ForePaaS Platform before, we suggest you have a look at the first 3 parts of our Getting Started guide to learn how your [Data Catalog](/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch/tuto_01_build_a_first_app_from_scratch_step1), [Lakehouse Manager](/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch/tuto_01_build_a_first_app_from_scratch_step2) and [Data Processing Engine](/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch/tuto_01_build_a_first_app_from_scratch_step3) work.

### AI in production in five easy steps


<!--

<div class="project-step">
   <a class="landing-link" href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step1">
      <img src="images/dataset-icon.png" alt="Dataset" style="width:100px;height:auto;">
      <div class="text">
         <h2>STEP 1 : Data preparation</h2>
         <p>Specify your train and test datasets.</p>
      </div>
   </a>
</div>

<div class="project-step">
   <a class="landing-link" href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step2">
      <img src="images/training-icon.png" alt="Training" style="width:100px;height:auto;">
      <div class="text">
         <h2>STEP 2 : Training procedure</h2>
         <p>Choose the algorithm at the core of your model.</p>
      </div>
   </a>
</div>

<div class="project-step">
   <a class="landing-link" href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step3">
      <img src="images/tuning-icon.png" alt="Tuning" style="width:100px;height:auto;">
      <div class="text">
         <h2>STEP 3 : Hyper-parameter tuning</h2>
         <p>Fine-tune the hyper-parameters of your estimator using our insightful studio.</p>
      </div>
   </a>
</div>

<div class="project-step">
   <a class="landing-link" href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step4">
      <img src="images/validation-icon.png" alt="Validation" style="width:100px;height:auto;">
      <div class="text">
         <h2>STEP 4 : Model selection</h2>
         <p>Compare trained models and pick the one that suits your needs.</p>
      </div>
   </a>
</div>

<div class="project-step">
   <a class="landing-link" href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step5">
      <img src="images/deployment-icon.png" alt="Deployment" style="width:100px;height:auto;">
      <div class="text">
         <h2>STEP 5 : Deployment settings</h2>
         <p>Specify the settings for your production-grade inference service</p>
      </div>
   </a>
</div>

-->

<div class="block-step">
   <img src="images/deployment-icon.png" />
   <div>
      <h2><a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step1">STEP 1 : Data preparation</a></h2>
      <p>Specify your train and test datasets.</p>
   </div>
</div>


<div class="block-step">
   <img src="images/deployment-icon.png" />
   <div>
      <h2><a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step2">STEP 2 : Training procedure</a></h2>
      <p>Choose the algorithm at the core of your model.</p>
   </div>
</div>


<div class="block-step">
   <img src="images/deployment-icon.png" />
   <div>
      <h2><a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step3">STEP 3 : Hyper-parameter tuning</a></h2>
      <p>Fine-tune the hyper-parameters of your estimator using our insightful studio.</p>
   </div>
</div>


<div class="block-step">
   <img src="images/deployment-icon.png" />
   <div>
      <h2><a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step4">STEP 4 : Model selection</a></h2>
      <p>Compare trained models and pick the one that suits your needs.</p>
   </div>
</div>


<div class="block-step">
   <img src="images/deployment-icon.png" />
   <div>
      <h2><a href="/pages/public_cloud/data_platform/tutorials/tuto_02_build_an_ai_model_from_scratch/tuto_02_build_an_ai_model_from_scratch_step5">STEP 5 : Deployment settings</a></h2>
      <p>Specify the settings for your production-grade inference service.</p>
   </div>
</div>