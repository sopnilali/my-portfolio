const AllBlogs = async() => {

    const res = await fetch('https://my-portfolio-server-amber.vercel.app/api/v2/blogs', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })

  return await res.json()
}

const SingleBlogs = async(id : string) => {
    const res = await fetch(`https://my-portfolio-server-amber.vercel.app/api/v2/blogs/details/${id}`, {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })

    return await res.json()
}

const getAllProjects = async()=> {
    const res = await fetch('https://my-portfolio-server-amber.vercel.app/api/v2/projects', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}

const ProjectDetails = async(id : string)=> {
    const res = await fetch(`https://my-portfolio-server-amber.vercel.app/api/v2/projects/${id}`, {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}

const getAllMessages = async()=> {
    const res = await fetch('https://my-portfolio-server-amber.vercel.app/api/v2/messages', {
        cache: 'no-cache',
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}

const deleteProject = async(id : string)=> {
    const res = await fetch(`https://my-portfolio-server-amber.vercel.app/api/v2/projects/${id}`, {
        method: 'DELETE',
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
    getAllProjects,
    getAllMessages,
    deleteProject
}
