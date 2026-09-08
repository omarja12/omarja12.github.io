import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail, TrendingUp, BarChart3, Brain, Code } from 'lucide-react';

export default function PortfolioSite() {
  const [activeTab, setActiveTab] = useState('all');

  // Projects data - organized by category
  // Easy to add more: just copy a project object and update the fields
  const projects = [
    {
      id: 1,
      title: 'Equity Momentum Strategy Backtest',
      category: 'quant',
      description: '6-month momentum long-short strategy on S&P 500 constituents with walk-forward validation.',
      metrics: {
        sharpe: '1.42',
        maxDD: '-18.3%',
        cagr: '12.8%',
        winRate: '58%'
      },
      tags: ['Backtesting', 'Alpha Generation', 'Python', 'NumPy/Pandas'],
      github: 'https://github.com/omarja12/Momentum-Backtest',
      featured: true,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Bootstrap Yield Curve',
      category: 'quant',
      description: 'Bootstrapping the yield curve using three methods: linear, cubic spline, and Nelson-Siegel. Demonstrates fixed-income calibration.',
      metrics: {
        methods: '3',
        datasets: 'Multiple',
        interpolation: 'Spline'
      },
      tags: ['Fixed Income', 'Interpolation', 'Python', 'Jupyter'],
      github: 'https://github.com/omarja12/Bootstrap-Yield-Curve',
      featured: true,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Nelson-Siegel-Svensson Calibration',
      category: 'quant',
      description: 'Advanced computational finance: calibrating NSS parameters for yield curve modeling, estimation, and day-count conventions.',
      metrics: {
        params: '5',
        optimization: 'MLE',
        validation: 'Walk-Forward'
      },
      tags: ['Fixed Income', 'Calibration', 'Optimization', 'Advanced'],
      github: 'https://github.com/omarja12/Nelson-Siegel-Svensson-parameters-estimations',
      featured: true,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'Insurance Customer Clustering',
      category: 'ml',
      description: 'Customer segmentation using K-means, DBSCAN, and hierarchical clustering. RFM analysis for insurance company.',
      metrics: {
        algorithms: '5+',
        clusters: '4-6',
        silhouette: '0.65'
      },
      tags: ['Clustering', 'Segmentation', 'RFM', 'Python'],
      github: 'https://github.com/omarja12/Insurance_Company_Customers_Clustering',
      featured: true,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      title: 'Pneumonia Detection from Chest X-Rays',
      category: 'cv',
      description: 'Deep learning CNN model for automated pneumonia classification from chest radiographs. Transfer learning with medical imaging.',
      metrics: {
        accuracy: '95%+',
        model: 'CNN/ResNet',
        dataset: '5000+ Images'
      },
      tags: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'TensorFlow'],
      github: 'https://github.com/omarja12/Pneumonia-Detection',
      featured: true,
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 6,
      title: 'Genetic Algorithm TSP',
      category: 'optimization',
      description: 'Solving the Traveling Salesman Problem using genetic algorithms. Evolutionary optimization demonstration.',
      metrics: {
        generations: 'Configurable',
        populationSize: '100+',
        convergence: 'Fast'
      },
      tags: ['Optimization', 'Evolutionary Algorithms', 'Python'],
      github: 'https://github.com/omarja12/Genetic_Algorithm_TSP',
      featured: true,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 7,
      title: 'NLP Sentiment Analysis',
      category: 'nlp',
      description: 'Natural language processing project for text classification and sentiment analysis using transformers and word embeddings.',
      metrics: {
        accuracy: '88%',
        model: 'BERT/Transformers',
        dataset: '10000+ Samples'
      },
      tags: ['NLP', 'Text Classification', 'Transformers', 'Python'],
      github: 'https://github.com/omarja12/NLP-Sentiment-Analysis',
      featured: true,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 8,
      title: 'Fintech/Insurtech Smart Contracts',
      category: 'blockchain',
      description: 'Ethereum smart contract for transparent insurance claim management with KYC, role-based permissions, and state transitions.',
      metrics: {
        chain: 'Ethereum',
        language: 'Solidity',
        features: 'KYC + RBAC'
      },
      tags: ['Blockchain', 'Solidity', 'Smart Contracts', 'Fintech'],
      github: 'https://github.com/omarja12/Fintech-Inssurtech-Project',
      featured: true,
      color: 'from-indigo-600 to-blue-600'
    }
  ];

  const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Omar Ja
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Data Science & <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Quantitative Finance</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Software engineer building AI-driven solutions, algorithmic trading strategies, and data products. Focused on turning complex financial problems into working implementations.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg transition">
                Get in Touch
              </a>
            </div>
            <div className="flex gap-4 text-slate-400">
              <a href="https://github.com/omarja12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/omarja12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <TrendingUp className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-3xl font-bold text-blue-400">12.8%</div>
                  <div className="text-sm text-slate-400">Strategy CAGR (Momentum Backtest)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart3 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-3xl font-bold text-cyan-400">1.42</div>
                  <div className="text-sm text-slate-400">Sharpe Ratio vs SPY Benchmark</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-3xl font-bold text-emerald-400">6+</div>
                  <div className="text-sm text-slate-400">Published Projects (Quant & ML)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Code className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-3xl font-bold text-purple-400">Full Stack</div>
                  <div className="text-sm text-slate-400">Python, Solidity, React, APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 mb-12">Quantitative finance, machine learning, and optimization algorithms</p>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {['all', 'quant', 'ml', 'nlp', 'cv', 'optimization', 'blockchain'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Projects' : tab === 'cv' ? 'Computer Vision' : tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map(project => (
              <div
                key={project.id}
                className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition duration-300"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition duration-300`} />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white flex-1 pr-4">{project.title}</h3>
                    {project.featured && (
                      <span className="text-xs px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full whitespace-nowrap">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-700">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-semibold text-blue-400">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Quantitative Finance</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Backtesting & Strategy Development</li>
                <li>• Fixed Income Modeling (Yield Curves)</li>
                <li>• Risk Management & Drawdown Analysis</li>
                <li>• Walk-Forward Validation</li>
              </ul>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Machine Learning & NLP</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Clustering & Segmentation</li>
                <li>• Transformers & Text Analysis</li>
                <li>• Classification & Regression</li>
                <li>• Computer Vision & CNNs</li>
              </ul>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Technical Stack</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Python, TensorFlow, PyTorch</li>
                <li>• React, JavaScript, Tailwind</li>
                <li>• Solidity & Blockchain</li>
                <li>• APIs & Data Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-400 mb-12">
            Interested in collaborating on quantitative finance projects, data science work, or hiring for freelance/side opportunities?
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:omar@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/omarja12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2024 Omar Ja. Built with React, Tailwind & ❤️</p>
      </footer>
    </div>
  );
}
