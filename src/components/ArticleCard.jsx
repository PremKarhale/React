function Card(){
    const cardInfo = {
    title: 'Serene Landscapes of Santorini',
    date: new Date('2023-06-15'),
    comments: 42,
    subTitle: 'Where the Aegean meets the sky.',
    description:
      'Santorini, with its iconic white-washed buildings and blue domes, offers breathtaking views of the caldera, stunning sunsets, and a unique volcanic landscape that captivates every visitor.',
    category: 'travel',
    imageURL:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  };

    return (
        <>
        <style>     
            {`
            .container{
            width:400px;
            height:auto;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            padding:20px;
            font-family: system-ui;
            border-radius:10px
            }
            div img{
            width:100%;
            border-radius:10px
            }
            div img+p{
            display:flex;
            justify-content:start;
            gap:20px;
            height:10px
            }
            button{
            padding:10px;
            border-radius:10px;
            border:none;
            background-color:#1414f0;
            color:white;
            }
            h2{
            height: 22px;
            }
            h4{
            color:#4c4949;
            height:15px
            }
            
            
            `}
        </style>
        <div class='container'>
            <img src={cardInfo.imageURL} alt="image" />
            <p>
                <span style={{fontSize:'15px'}}>june 15 2023</span>
                <span style={{fontSize:'15px'}}>comments</span>     
            </p>
            <h2>{cardInfo.title}</h2>
            <h4>{cardInfo.subTitle}</h4>
            <p style={{color:'#4c4949'}}>{cardInfo.description}</p>
            <button>Read more</button>
        </div>
        </>
        

    )
}

export default Card