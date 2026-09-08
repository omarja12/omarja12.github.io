import React, { useState } from 'react';
import { ExternalLink, Github, Mail, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Equity Momentum Strategy Backtest',
      category: 'quant',
      description: 'A systematic 6-month momentum long-short strategy backtested on S&P 500 constituents over 5 years. Walk-forward validated with statistical significance testing.',
      highlights: [
        '12.8% CAGR vs 11% SPY',
        '1.42 Sharpe ratio',
        '-18.3% max drawdown',
        '58% win rate'
      ],
      tech: ['Python', 'NumPy', 'Pandas', 'Backtesting', 'Statistics'],
      link: 'https://github.com/omarja12/Momentum-Backtest',
      image: '📈'
    },
    {
      id: 2,
      title: 'Bootstrap Yield Curve',
      category: 'quant',
      description: 'Fixed income calibration using three methods: linear interpolation, cubic splines, and Nelson-Siegel. Demonstrates zero-coupon curve extraction from market bond prices.',
      highlights: [
        '3 interpolation methods',
        'Smooth curve building',
        'Day-count conventions',
        'Production-ready'
      ],
      tech: ['Python', 'Jupyter', 'Fixed Income', 'Interpolation'],
      link: 'https://github.com/omarja12/Bootstrap-Yield-Curve',
      image: '📊'
    },
    {
      id: 3,
      title: 'Nelson-Siegel-Svensson Calibration',
      category: 'quant',
      description: 'Advanced computational finance: calibrating NSS parameters for yield curve modeling. Includes walk-forward validation and regime testing.',
      highlights: [
        '5-parameter model',
        'MLE optimization',
        'Walk-forward validation',
        'Economic interpretation'
      ],
      tech: ['Python', 'Scipy', 'Optimization', 'Fixed Income'],
      link: 'https://github.com/omarja12/Nelson-Siegel-Svensson-parameters-estimations',
      image: '📈'
    },
    {
      id: 4,
      title: 'Insurance Customer Clustering',
      category: 'ml',
      description: 'Customer segmentation using 5+ clustering algorithms. RFM analysis identifies high-value, at-risk, and growth segments for targeted marketing.',
      highlights: [
        '50k+ customers analyzed',
        '5 algorithms compared',
        '0.65 Silhouette score',
        'Business-ready segments'
      ],
      tech: ['Python', 'Scikit-learn', 'RFM Analysis', 'Clustering'],
      link: 'https://github.com/omarja12/Insurance_Company_Customers_Clustering',
      image: '👥'
    },
    {
      id: 5,
      title: 'Pneumonia Detection from Chest X-Rays',
      category: 'cv',
      description: 'Deep learning CNN model for automated pneumonia classification from chest radiographs. Transfer learning with medical imaging dataset.',
      highlights: [
        '95%+ accuracy',
        'Transfer learning',
        '5000+ training images',
        'Medical imaging'
      ],
      tech: ['TensorFlow', 'CNN', 'Computer Vision', 'Deep Learning'],
      link: 'https://github.com/omarja12/Pneumonia-Detection',
      image: '🩺'
    },
    {
      id: 6,
      title: 'Genetic Algorithm for TSP',
      category: 'optimization',
      description: 'Evolutionary optimization solving the Traveling Salesman Problem. Demonstrates meta-heuristic techniques for NP-hard combinatorial problems.',
      highlights: [
        'Genetic algorithms',
        'Tournament selection',
        'Order-1 crossover',
        'Scalable solution'
      ],
      tech: ['Python', 'Optimization', 'Evolutionary Algorithms'],
      link: 'https://github.com/omarja12/Genetic_Algorithm_TSP',
      image: '🧬'
    },
    {
      id: 7,
      title: 'NLP Sentiment Analysis',
      category: 'nlp',
      description: 'Text classification and sentiment analysis using transformers and word embeddings. Handles large-scale text processing and classification.',
      highlights: [
        '88% accuracy',
        'Transformer models',
        '10000+ training samples',
        'Production pipeline'
      ],
      tech: ['NLP', 'BERT', 'Transformers', 'Python'],
      link: 'https://github.com/omarja12/NLP-Sentiment-Analysis',
      image: '💬'
    },
    {
      id: 8,
      title: 'Fintech Smart Contracts',
      category: 'blockchain',
      description: 'Ethereum smart contract for transparent insurance claims. Implements KYC verification, role-based access control, and state machine validation.',
      highlights: [
        'Solidity implementation',
        'RBAC system',
        'KYC integration',
        'Audit trail'
      ],
      tech: ['Solidity', 'Ethereum', 'Smart Contracts', 'Blockchain'],
      link: 'https://github.com/omarja12/Fintech-Inssurtech-Project',
      image: '⛓️'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'quant', label: 'Quant Finance' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'nlp', label: 'NLP' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'optimization', label: 'Optimization' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-2">Omar Ja</h1>
          <p className="text-lg text-gray-600">Data Science & Quantitative Finance</p>
          <p className="text-gray-500 mt-2">Building AI-driven solutions, algorithmic trading strategies, and data products</p>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-blue-600">12.8%</div>
              <div className="text-sm text-gray-600">Strategy CAGR (Momentum)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">1.42</div>
              <div className="text-sm text-gray-600">Sharpe Ratio vs SPY</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Featured Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Full Stack</div>
              <div className="text-sm text-gray-600">Python, React, Solidity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {filtered.map(project => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="text-5xl flex-shrink-0">{project.image}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View on GitHub
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Quantitative Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Backtesting & alpha generation</li>
                <li>• Fixed income modeling</li>
                <li>• Risk management</li>
                <li>• Walk-forward validation</li>
                <li>• Statistical testing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Machine Learning & AI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep learning (CNNs, RNNs)</li>
                <li>• NLP & transformers</li>
                <li>• Clustering & segmentation</li>
                <li>• Computer vision</li>
                <li>• Time series analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">Technical Stack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python (NumPy, Pandas, Scikit-learn)</li>
                <li>• TensorFlow & PyTorch</li>
                <li>• React & JavaScript</li>
                <li>• Solidity & Ethereum</li>
                <li>• SQL & APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Available for freelance and side projects in quantitative finance, machine learning, and full-stack development. 
          </p>
          
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:jarir.omar@hotmail.fr"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/omarja12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2024 Omar Ja. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
