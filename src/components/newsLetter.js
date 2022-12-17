
function newsLetter(props) {
  console.log(props)
  return (
    <div className="container-fluid">
      <div className="row">
      {props.news.map((data, i) => {
        return (
          <div className="card mt-3 border-4 mx-4 ms-auto" style={{ width: "25rem" }}>
            <a href={data.url} className="text-decoration-none text-dark">
              <img src={data.urlToImage} className="w-100" />
              <p className="mt-3"><b>Name: </b>{data.source.name}</p>
              <p><b>Author: </b>{data.author} </p>
              <p><b>Title: </b>{data.title} </p>
              <p><b>Description: </b>{data.description}</p>
              <p><b>Publish: </b>{data.publishedAt}</p>
              <p><b>Content: </b> {data.content}</p>
            </a>
          </div>
        )
      }
      )}
      </div>
    </div>
  );
}

export default newsLetter;