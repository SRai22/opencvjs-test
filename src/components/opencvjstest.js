import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image_1 from '../assets/forthesecrit.jpg';

//similar to css to get the two cards side by side
var metaContainerStyle = {
    gridTemplateColumns: "auto auto",
    display: "grid"
}

var myStyleImage = {
    display: "none"
}

var TitleStyle = {
    color: "black"
}

var containerStyle = {
    width: "300px",
    height: "300px",
    overflowY: "auto",
    overflowX: "auto"
}

var myStyleInput = {
    padding: 0,
    margin: 0
}

var inputSizeStyle = {
    width: "300px",
    marginTop: "10px"
}

function fromImageToCanvas(image_id,canvas_id){
    var canvas = document.getElementById(canvas_id);
    var context = canvas.getContext('2d');
    var img = document.getElementById(image_id);
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img,0,0);
}

//Create matrix 
function createMatrixTable(filterMatrix,setFilterMatrix){
    let cell = []
    console.log(filterMatrix)
    for (var i = 0; i < Math.sqrt(filterMatrix["data"].length); i++){
        for (var idx = 0; idx< Math.sqrt(filterMatrix["data"].length); idx++){
            let cellID = `cell${i}-${idx}`
            cell.push(
            <div>
                <input
                    value="2"
                />
            </div>             
                )
        }
    }
    return cell
}



function OpenCV({canvas_id}){

    const [filterMatrix, setFilterMatrix]=useState({
        data: [-0.5,-0.5,-0.5,-0.5,4.3,-0.5,-0.5,-0.5,-0.5],size:3
    })
    const [gridStyle, setGridStyle]=useState({
        width:"100%", height:"100%", gridTemplateColumns: "auto auto auto", display:"grid"
    })
    var image_id = 'image1'+canvas_id;
    var input_canvas_id = "canvasInputId"+ canvas_id;
    var output_canavas_id = "canvasOutputId";
    var rows = createMatrixTable(filterMatrix, setFilterMatrix);

    function onLoad(){
        fromImageToCanvas(image_id,input_canvas_id);
    }
    return (
        <div>
            <img id={image_id} src={image_1} onLoad={onLoad} style={myStyleImage}/>
            <div style={metaContainerStyle}>
                <div>
                    <Card style = {{ width: '30rem'}}>
                        <canvas id={input_canvas_id}></canvas>
                        <Card.Body>
                            <div style={containerStyle}>
                                <div style={gridStyle}>
                                    {rows}
                                </div>
                            </div>
                            <input
                            style = {inputSizeStyle}
                            type  = "number"
                            name  = "name"
                            min   = "2"
                            value = {filterMatrix["size"]}
                            />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style = {{ width: '30rem', height: '100%'}}>
                        <canvas id={output_canavas_id}></canvas>
                        <Card.Body>
                            <Card.Title style={TitleStyle}>
                                Image Filtering
                            </Card.Title>
                            <Card.Text style={TitleStyle}>
                                Exploring image filtering with opencv js
                            </Card.Text>
                            <Button>
                                Start Random Matrix
                            </Button>
                            <Button>
                                Stop Random Matrix
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default OpenCV;