function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cN7WfnTbY/model.json",modelready);

}
function modelready()
{
    classifier.classify(gotResult);
}
function gotResult(error,results){
    console.log("result is recieved");
}