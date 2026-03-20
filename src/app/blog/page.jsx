const BlogPage = () => {

    const user = [
        {
            id:1,
            name:"John",
            title:"hello john"
        },
        {
            id:2,
            name:"Doe",
            title:"hello doe"
        },
        {
            id:3,
            name:"Jane",
            title:"hello jane"
        }
    ]

  return (
    <div>
       <h1>all the users</h1>

       {
        user.map((user)=>{
            return(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.title}</p>
                </div>
            )
        })
       }
    </div>
  )
}

export default BlogPage
