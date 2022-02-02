function Article(props) {
    return(
      <article>
        <h3>{props.head}</h3>
        <h4>{props.subhead}</h4>
        <p>{props.descr}</p>
      </article>
    )
  }

  export default Article