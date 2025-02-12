const AllBlogs = async() => {

    const res = await fetch('http://localhost:5000/api/v2/blogs', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })

  return await res.json()
}

const SingleBlogs = async(id : string) => {
    const res = await fetch(`http://localhost:5000/api/v2/blogs/details/${id}`, {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })

    return await res.json()
}

const getAllProjects = async()=> {
    const res = await fetch('http://localhost:5000/api/v2/projects', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}

const ProjectDetails = async(id : string)=> {
    const res = await fetch(`http://localhost:5000/api/v2/projects/${id}`, {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}

export const ServerModuler = {
    AllBlogs,
    SingleBlogs,
    ProjectDetails,
    getAllProjects
}
