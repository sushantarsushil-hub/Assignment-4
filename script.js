let jobs = [
     {
        id:1,
        company:"Google",
        position:"Web Developer",
        location:"Remote",
        type:"Full Time",
        salary:"$1500/month",
        description:"Build Future for millions people",
        status:"all"
    },
    {
        id:2,
        company:"Meta",
        position:"Backend Developer",
        location:"Chicago",
        type:"Part Time",
        salary:"$1200/month",
        description:"Create stunning experiences ",
        status:"all"
    },
     {
        id:3,
        company:"YouTube",
        position:"Machine Learning Engineer",
        location:"Remote",
        type:"Full Time",
        salary:"$1800/month",
        description:"Stay mindful and gain the new one",
        status:"all"
    },
     {
        id:4,
        company:"Spotify",
        position:"Frontend Developer",
        location:"Norway",
        type:"Hybrid",
        salary:"$1900/month",
        description:"Better music experience",
        status:"all"
    },
     {
        id:5,
        company:"Instagram",
        position:"Web Developer",
        location:"Remote",
        type:"Full Time",
        salary:"$1600/month",
        description:"Connect the world in hand",
        status:"all"
    },
     {
        id:6,
        company:"WebFlow Agency",
        position:"Web Designer",
        location:"Dhaka",
        type:"Full Time",
        salary:"$1500/month",
        description:"Build cross-platform for people",
        status:"all"
    },
     {
        id:7,
        company:"Microsoft",
        position:"UI Designer",
        location:"Remote",
        type:"Full Time",
        salary:"$2000/month",
        description:"Name of trust and bonding",
        status:"all"
    },
     {
        id:8,
        company:"spaceX",
        position:"Software Engineer",
        location:"Siliconvalley",
        type:"Full Time",
        salary:"$1900/month",
        description:"New future to explore",
        status:"all"
    }

];

let currentTab = 'all';

function updateDashboard() {
    document.getElementById('total-count').innerText = jobs.length;

    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;

    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
}

 function switchTab(tab, element) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    element.classList.add('tab-active');
    renderJobs();
}


function updateStatus(id,newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobs[jobIndex].status === newStatus) {
        jobs[jobIndex].status = 'all';
    } else {
        jobs[jobIndex].status = newStatus;
    }
    updateDashboard();
    renderJobs();
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    updateDashboard();
    renderJobs();
}

function renderJobs() {
    const container = document.getElementById('jobs-container');
    const filteredJobs = currentTab === 'all' ? jobs : jobs.filter(j=>j.status === currentTab);
    document.getElementById('tab-count').innerText = filteredJobs.length;

    if (filteredJobs.length === 0) {
        container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 text-center">
        <i class="fa-regular fa-file-lines text-6xl text-slate-300 mb-4"></i>
        <h3 class="text-xl font-bold text-slate-700">No jobs available</h3>
        <p class="text-slate-500">Check back soon new job opportunities</p>
        </div>`;
        return;
    }

    container.innerHTML = filteredJobs.map(job =>`
      <div class="p-5 border border-r-slate-200 rounded-xl hover:shadow-md transition-shadow relative">
      <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-300 hover:text-red-500">
      <i class="fa-solid fa-trash-can"></i>
      </button>
      <div class="mb-2">
      <h4 class="font-bold text-lg text-slate-800">${job.company}</h4>
      <p class="text-sm font-semibold text-gray-600">${job.position}</p>
      </div>
      <div class="flex flex-wrap gap-3 text-xs text-slate-500 mb-3">
      <span><i class="fa-solid fa-location-dot mr-1"></i>${job.location}</span>

      <span><i class="fa-solid fa-briefcase mr-1"></i>${job.type}</span>

      <span><i class="fa-solid fa-money-bill mr-1"></i>${job.salary}</span>
      </div>
      <p class="text-sm text-slate-600 mb-4 line-clamp-2">${job.description}</p>
      <div class="flex gap-2">
      <button onclick="updateStatus(${job.id},'interview')"
      class="btn btn-sm ${job.status === 'interview' ? 'btn-success text-white' : 'btn-outline btn-success'}"> Interview </button>
      <button onclick="updateStatus(${job.id}, 'rejected')"
      class="btn btn-sm ${job.status === 'rejected' ? 'btn-error text-white' : 'btn-outline btn-error'}">
      Rejected
      </button>
      </div>
      </div>

       `).join('');
}

updateDashboard();
renderJobs();