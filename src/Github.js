// components/GithubProjects.js
import React, { useEffect, useState } from "react";

const GithubProjects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    const username = "WahyuSapurata"; // Ganti dengan username GitHub kamu

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((data) => {
                const sortedRepos = data
                    .filter((repo) => repo.description) // hanya repositori yang punya deskripsi
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // terbaru dulu
                setRepos(sortedRepos);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Gagal ambil data dari GitHub", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading project dari GitHub...</p>;

    return (
        <div>
            {repos.map((repo) => (
                <div className="bg_content rd_12 p_8 mt-16" key={repo.id}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>

                    <div className="mt-5 text-center">
                        <a
                            className="btn_action bg_content bg-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo.html_url}
                        >
                            <span>View Repository</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GithubProjects;