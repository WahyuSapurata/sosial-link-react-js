import React, { useState, useEffect } from "react";

const GithubProjects = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllRepos = async () => {
            const perPage = 100;
            let page = 1;
            let allRepos = [];
            let hasMore = true;

            try {
                while (hasMore) {
                    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
                    const data = await res.json();

                    if (data && data.length > 0) {
                        allRepos = allRepos.concat(data);
                        page++;
                    } else {
                        hasMore = false;
                    }
                }

                const sortedRepos = allRepos
                    // .filter(repo => repo.description)
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                setRepos(sortedRepos);
            } catch (error) {
                console.error("Gagal ambil data dari GitHub", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllRepos();
    }, [username]);

    // Tampilkan loading atau data
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="bg_content bg-style rd_12 p_8 mt-16">Project Repositori GitHub ({repos.length})</div>
            <ul>
                {repos.map((repo, index) => (
                    <div className="bg_content rd_12 p_8 mt-16" key={repo.id}>
                        <h3>{index + 1}. {repo.name}</h3>
                        <p>{repo.description}</p>
                        <p>- Terakhir diupdate: {new Date(repo.updated_at).toLocaleDateString()}</p>

                        <div className="mt-5 text-center">
                            <a
                                className="btn_action bg_content bg-text"
                                href={repo.html_url} target="_blank" rel="noopener noreferrer"
                            >
                                <span>View Repository</span>
                            </a>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default GithubProjects;
