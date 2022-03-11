import { useEffect, useRef, useState } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [red, setRed] = useState(125);
  const [green, setGreen] = useState(125)
  const [blue, setBlue] = useState(125)
  const [alpha, setAlpha] = useState(255)





  useEffect(() => {
    const videoFeed = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err)
      }
    };
    videoFeed();

  }, [])

  useEffect(() => {
    const imageFrame = () => {
      let video = videoRef.current;
      let frame = canvasRef.current;
      let ctx = frame.getContext('2d');


      ctx.drawImage(video, 0, 0, 640, 480);
      const imageData = ctx.getImageData(0, 0, 640, 480);
      const data = imageData.data;
      console.log(data);

      for (var i = 0; i < data.length; i += 4) {
        data[i + 0] = red - data[i] * 3;     // red
        data[i + 1] = green - data[i + 1]; // green
        data[i + 2] = blue - data[i + 2]; // blue
        data[i + 3] = alpha - data[i + 1] + data[i + 0] * 3; // alpha
        data[i + 5] = red * 3.14; // alpha
        data[i + 6] = green * 3.14; // alpha
        data[i + 7] = blue * 3.14; // alpha

        data[i + 9] = 42 * 2; // alpha


      }
      ctx.putImageData(imageData, 0, 0);

    }
    imageFrame();

    //setInterval(imageFrame, 100);

  }, [red, green, blue, alpha])






  const handleRed = (e) => {
    setRed(e.target.value)

  }
  const handleGreen = (e) => {
    setGreen(e.target.value)

  }
  const handleBlue = (e) => {
    setBlue(e.target.value)

  }
  const handleAlpha = (e) => {
    setAlpha(e.target.value)

  }




  return (
    <>
      <video ref={videoRef} autoPlay ></video>
      <canvas ref={canvasRef} width='640' height='480'></canvas>
      <div className="slidecontainer">
        RED
        <input type="range" min="0" max="500" value={red} onChange={handleRed} className="slider" id="myRange"></input>
      </div>
      <div className="slidecontainer">
        GREEN
        <input type="range" min="0" max="500" value={green} onChange={handleGreen} className="slider" id="myRange"></input>
      </div>
      <div className="slidecontainer">
        BLUE
        <input type="range" min="0" max="500" value={blue} onChange={handleBlue} className="slider" id="myRange"></input>
      </div>
      <div className="slidecontainer">
        Alpha
        <input type="range" min="0" max="500" value={alpha} onChange={handleAlpha} className="slider" id="myRange"></input>
      </div>
      <div className="slidecontainer">
        Alpha
        <input type="range" min="0" max="500" value={alpha} onChange={handleAlpha} className="slider" id="myRange"></input>
      </div>
      <div className="slidecontainer">
        Alpha
        <input type="range" min="0" max="500" value={alpha} onChange={handleAlpha} className="slider" id="myRange"></input>
      </div>

      <div className="slidecontainer">
        Alpha
        <input type="range" min="0" max="500" value={alpha} onChange={handleAlpha} className="slider" id="myRange"></input>
      </div>


    </>
  )
}

export default Webcam;