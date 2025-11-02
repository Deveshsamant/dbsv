import React, { useState, useEffect } from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const [chessStats, setChessStats] = useState({
    rating: 'Loading...',
    games: 'Loading...',
    winrate: 'Loading...',
    best: 'Loading...',
    lastUpdated: 'Never'
  });

  const [valorantStats, setValorantStats] = useState({
    rank: 'Loading...',
    rr: 'Loading...',
    level: 'Loading...',
    peak: 'Loading...',
    lastUpdated: 'Never'
  });

  const [clashStats, setClashStats] = useState({
    trophies: 'Loading...',
    best: 'Loading...',
    level: 'Loading...',
    wins: 'Loading...',
    lastUpdated: 'Never'
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [modalTitle, setModalTitle] = useState('');
  const [currentGameType, setCurrentGameType] = useState('');

  // Fetch real chess stats from Chess.com API
  const fetchChessStats = async () => {
    try {
      // Set loading state
      setChessStats(prev => ({
        ...prev,
        rating: 'Loading...',
        games: 'Loading...',
        winrate: 'Loading...',
        best: 'Loading...'
      }));

      // Fetch player stats from Chess.com API
      const statsResponse = await fetch('https://api.chess.com/pub/player/deveshsamanthero/stats');
      if (!statsResponse.ok) throw new Error('Failed to fetch chess stats');
      const statsData = await statsResponse.json();

      // Prioritize Rapid rating specifically for display
      let gameData = null;
      let gameType = '';
      
      // Look for rapid rating first since that's what the user wants
      if (statsData.chess_rapid && statsData.chess_rapid.last) {
        gameData = statsData.chess_rapid;
        gameType = 'Rapid';
      } else {
        // Fallback to other game types if rapid not available
        const gameTypes = [
          { key: 'chess_daily', name: 'Daily' },
          { key: 'chess_blitz', name: 'Blitz' },
          { key: 'chess_bullet', name: 'Bullet' }
        ];
        
        for (const type of gameTypes) {
          if (statsData[type.key] && statsData[type.key].last) {
            gameData = statsData[type.key];
            gameType = type.name;
            break;
          }
        }
      }
      
      if (gameData) {
        // Update current rating
        const currentRating = gameData.last.rating || 0;
        
        // Update games played
        const wins = gameData.record.win || 0;
        const losses = gameData.record.loss || 0;
        const draws = gameData.record.draw || 0;
        const totalGames = wins + losses + draws;
        
        // Update win rate
        const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
        
        // Update best rating
        const bestRating = gameData.best?.rating || currentRating;
        
        // Update state with real data
        setChessStats({
          rating: currentRating.toLocaleString(),
          games: totalGames.toLocaleString(),
          winrate: winRate + '%',
          best: bestRating.toLocaleString(),
          lastUpdated: new Date().toLocaleTimeString()
        });
      } else {
        throw new Error('No valid chess data found');
      }
    } catch (error) {
      console.error('Error fetching chess stats:', error);
      // Set error state
      setChessStats(prev => ({
        ...prev,
        rating: 'N/A',
        games: 'N/A',
        winrate: 'N/A',
        best: 'N/A'
      }));
    }
  };

  // Simulate fetching Valorant stats
  const fetchValorantStats = () => {
    // In a real implementation, this would fetch from the Valorant API
    setTimeout(() => {
      setValorantStats({
        rank: 'Gold 3',
        rr: '84 RR',
        level: '388',
        peak: 'Diamond 3',
        lastUpdated: new Date().toLocaleTimeString()
      });
    }, 1500);
  };

  // Simulate fetching Clash Royale stats
  const fetchClashStats = () => {
    // In a real implementation, this would fetch from the Clash Royale API
    setTimeout(() => {
      setClashStats({
        trophies: '6,234',
        best: '6,547',
        level: '14',
        wins: '1,687',
        lastUpdated: new Date().toLocaleTimeString()
      });
    }, 2000);
  };

  // Refresh all stats
  const refreshAllStats = () => {
    fetchChessStats();
    fetchValorantStats();
    fetchClashStats();
  };

  // Show detailed stats modal
  const showDetailedStats = (gameType) => {
    setCurrentGameType(gameType);
    setModalOpen(true);
    
    const gameNames = {
      chess: 'Chess Statistics - Devesh Samant',
      valorant: 'Valorant Statistics - Bardock ka papa',
      clash: 'Clash Royale Statistics - #2R9U9J8QQ'
    };
    
    setModalTitle(gameNames[gameType]);
    
    // Reset to overview tab
    setActiveTab('overview');
  };

  // Close stats modal
  const closeStatsModal = () => {
    setModalOpen(false);
  };

  // Switch tabs in modal
  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Initialize stats on component mount
  useEffect(() => {
    fetchChessStats();
    fetchValorantStats();
    fetchClashStats();
    
    // Set up auto-refresh every 10 minutes
    const interval = setInterval(() => {
      refreshAllStats();
    }, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hobbies-page">
      {/* Hero Section */}
      <section className="hobbies-hero">
        <div className="starfield">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">My Gaming Universe</span>
              <span className="title-subtitle">Strategic Battles & Digital Conquests</span>
            </h1>
            <p className="hero-description">
              When I'm not coding the future, I'm conquering digital worlds and mastering strategic games. 
              Here's a glimpse into my gaming achievements and competitive spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies Content */}
      <section className="hobbies-content">
        <div className="container">
          <div className="hobbies-grid">
            {/* Chess Hobby Card */}
            <div className="hobby-card chess-card">
              <div className="hobby-image">
                <img 
                  src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=500&h=300&fit=crop&crop=center" 
                  alt="Chess Game" 
                  className="game-bg" 
                />
                <div className="image-overlay"></div>
              </div>
              <div className="hobby-header">
                <div className="hobby-icon">
                  <i className="fas fa-chess"></i>
                </div>
                <div className="hobby-title">
                  <h3>Chess</h3>
                  <p>Strategic Mind Games</p>
                </div>
                <div className="status-indicator" id="chess-status">
                  <i className="fas fa-circle"></i>
                  <span>Live</span>
                </div>
              </div>
              
              <div className="hobby-stats">
                <div className="stat-item">
                  <div className="stat-value" id="chess-rating">{chessStats.rating}</div>
                  <div className="stat-label">Rapid Rating</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="chess-games">{chessStats.games}</div>
                  <div className="stat-label">Games Played</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="chess-winrate">{chessStats.winrate}</div>
                  <div className="stat-label">Win Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="chess-best">{chessStats.best}</div>
                  <div className="stat-label">Best Rating</div>
                </div>
              </div>
              
              <div className="hobby-details">
                <div className="username">
                  <i className="fas fa-user"></i>
                  <span>@deveshsamanthero</span>
                </div>
                <div className="platform">
                  <i className="fas fa-globe"></i>
                  <span>Chess.com</span>
                </div>
                <div className="last-updated" id="chess-last-updated">
                  <i className="fas fa-clock"></i>
                  <span>{chessStats.lastUpdated}</span>
                </div>
              </div>
              
              <div className="hobby-actions">
                <a 
                  href="https://www.chess.com/member/deveshsamanthero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hobby-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Profile
                </a>
                <button 
                  className="hobby-btn secondary" 
                  onClick={fetchChessStats}
                >
                  <i className="fas fa-sync-alt"></i>
                  Refresh
                </button>
                <button 
                  className="hobby-btn view-btn" 
                  onClick={() => showDetailedStats('chess')}
                >
                  <i className="fas fa-info-circle"></i>
                  View Details
                </button>
              </div>
            </div>
            
            {/* Valorant Hobby Card */}
            <div className="hobby-card valorant-card">
              <div className="hobby-image">
                <img 
                  src="/images/valo.webp" 
                  alt="Valorant Gaming" 
                  className="game-bg" 
                />
                <div className="image-overlay"></div>
              </div>
              <div className="hobby-header">
                <div className="hobby-icon">
                  <i className="fas fa-crosshairs"></i>
                </div>
                <div className="hobby-title">
                  <h3>Valorant</h3>
                  <p>Tactical FPS Battles</p>
                </div>
                <div className="status-indicator" id="valorant-status">
                  <i className="fas fa-circle"></i>
                  <span>Live</span>
                </div>
              </div>
              
              <div className="hobby-stats">
                <div className="stat-item">
                  <div className="stat-value" id="valorant-rank">{valorantStats.rank}</div>
                  <div className="stat-label">Current Rank</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="valorant-rr">{valorantStats.rr}</div>
                  <div className="stat-label">Ranked Rating</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="valorant-level">{valorantStats.level}</div>
                  <div className="stat-label">Account Level</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="valorant-peak">{valorantStats.peak}</div>
                  <div className="stat-label">Peak Rank</div>
                </div>
              </div>
              
              <div className="hobby-details">
                <div className="username">
                  <i className="fas fa-user"></i>
                  <span>GoKu #BLUFF</span>
                </div>
                <div className="platform">
                  <i className="fas fa-gamepad"></i>
                  <span>Riot Games</span>
                </div>
                <div className="last-updated" id="valorant-last-updated">
                  <i className="fas fa-clock"></i>
                  <span>{valorantStats.lastUpdated}</span>
                </div>
              </div>
              
              <div className="hobby-actions">
                <a 
                  href="https://tracker.gg/valorant/profile/riot/GoKu%23BLUFF/overview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hobby-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Stats
                </a>
                <button 
                  className="hobby-btn secondary" 
                  onClick={fetchValorantStats}
                >
                  <i className="fas fa-sync-alt"></i>
                  Refresh
                </button>
                <button 
                  className="hobby-btn view-btn" 
                  onClick={() => showDetailedStats('valorant')}
                >
                  <i className="fas fa-info-circle"></i>
                  View Details
                </button>
              </div>
            </div>
            
            {/* Clash Royale Hobby Card */}
            <div className="hobby-card clash-royale-card">
              <div className="hobby-image">
                <img 
                  src="/images/cr.jpeg" 
                  alt="Clash Royale Game" 
                  className="game-bg" 
                />
                <div className="image-overlay"></div>
              </div>
              <div className="hobby-header">
                <div className="hobby-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <div className="hobby-title">
                  <h3>Clash Royale</h3>
                  <p>Strategic Card Battles</p>
                </div>
                <div className="status-indicator" id="clash-status">
                  <i className="fas fa-circle"></i>
                  <span>Live</span>
                </div>
              </div>
              
              <div className="hobby-stats">
                <div className="stat-item">
                  <div className="stat-value" id="clash-trophies">{clashStats.trophies}</div>
                  <div className="stat-label">Current Trophies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="clash-best">{clashStats.best}</div>
                  <div className="stat-label">Best Trophies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="clash-level">{clashStats.level}</div>
                  <div className="stat-label">King Level</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value" id="clash-wins">{clashStats.wins}</div>
                  <div className="stat-label">Total Wins</div>
                </div>
              </div>
              
              <div className="hobby-details">
                <div className="username">
                  <i className="fas fa-user"></i>
                  <span>#2R9U9J8QQ</span>
                </div>
                <div className="platform">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Supercell</span>
                </div>
                <div className="last-updated" id="clash-last-updated">
                  <i className="fas fa-clock"></i>
                  <span>{clashStats.lastUpdated}</span>
                </div>
              </div>
              
              <div className="hobby-actions">
                <a 
                  href="https://link.clashroyale.com/invite/friend/en?tag=2R9U9J8QQ&token=wp4hkypa&platform=android" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hobby-btn"
                >
                  <i className="fas fa-user-plus"></i>
                  Add Friend
                </a>
                <button 
                  className="hobby-btn secondary" 
                  onClick={fetchClashStats}
                >
                  <i className="fas fa-sync-alt"></i>
                  Refresh
                </button>
                <button 
                  className="hobby-btn view-btn" 
                  onClick={() => showDetailedStats('clash')}
                >
                  <i className="fas fa-info-circle"></i>
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Additional Gaming Info */}
          <div className="gaming-info">
            <div className="info-card">
              <h3>Gaming Philosophy</h3>
              <p>I believe gaming enhances problem-solving skills, strategic thinking, and teamwork - all essential qualities for a developer. Whether it's calculating chess moves or coordinating team strategies in Valorant, every game teaches me something new about logic, patience, and competitive spirit.</p>
            </div>
            <div className="info-card">
              <h3>Skills Developed</h3>
              <ul>
                <li>Strategic Planning & Analysis</li>
                <li>Quick Decision Making</li>
                <li>Team Coordination</li>
                <li>Pattern Recognition</li>
                <li>Competitive Mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Game Together?</h2>
            <p>Looking for a teammate or chess opponent? Let's connect and play!</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                <i className="fas fa-gamepad"></i>
                Challenge Me
              </a>
              <a href="/projects" className="btn-secondary">
                <i className="fas fa-code"></i>
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stats Modal */}
      {modalOpen && (
        <div id="stats-modal" className={`stats-modal ${modalOpen ? 'active' : ''}`}>
          <div className="modal-overlay" onClick={closeStatsModal}></div>
          <div className="modal-container">
            <div className="modal-header">
              <h2 id="modal-title">{modalTitle}</h2>
              <button className="modal-close" onClick={closeStatsModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              <div className="stats-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} 
                  data-tab="overview"
                  onClick={() => switchTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} 
                  data-tab="history"
                  onClick={() => switchTab('history')}
                >
                  History
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`} 
                  data-tab="achievements"
                  onClick={() => switchTab('achievements')}
                >
                  Achievements
                </button>
              </div>
              
              <div className="tab-content">
                {/* Overview Tab */}
                <div id="overview-tab" className={`tab-panel ${activeTab === 'overview' ? 'active' : ''}`}>
                  <div className="overview-grid">
                    <div className="overview-card">
                      <div className="overview-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="overview-info">
                        <h4>Current Performance</h4>
                        <div id="current-performance">
                          {currentGameType === 'chess' && (
                            <div><strong>{chessStats.rating}</strong> Current Rating<br/><small>Win Rate: {chessStats.winrate}</small></div>
                          )}
                          {currentGameType === 'valorant' && (
                            <div><strong>{valorantStats.rank}</strong><br/><small>RR: {valorantStats.rr}</small></div>
                          )}
                          {currentGameType === 'clash' && (
                            <div><strong>{clashStats.trophies}</strong><br/><small>Current Trophies</small></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="overview-card">
                      <div className="overview-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="overview-info">
                        <h4>Progress Trend</h4>
                        <div id="progress-trend">
                          {currentGameType === 'chess' && (
                            <div><strong>◂️ Improving</strong><br/><small>Consistent progress in rapid games</small></div>
                          )}
                          {currentGameType === 'valorant' && (
                            <div><strong>📈 Climbing</strong><br/><small>Steady rank progression</small></div>
                          )}
                          {currentGameType === 'clash' && (
                            <div><strong>🏆 Strong</strong><br/><small>Maintaining high trophy count</small></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="overview-card">
                      <div className="overview-icon">
                        <i className="fas fa-target"></i>
                      </div>
                      <div className="overview-info">
                        <h4>Next Goal</h4>
                        <div id="next-goal">
                          {currentGameType === 'chess' && (
                            <div><strong>1600+ Rating</strong><br/><small>Target: Master level gameplay</small></div>
                          )}
                          {currentGameType === 'valorant' && (
                            <div><strong>Platinum Rank</strong><br/><small>Next milestone to achieve</small></div>
                          )}
                          {currentGameType === 'clash' && (
                            <div><strong>7000+ Trophies</strong><br/><small>Push to Master League</small></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="overview-card">
                      <div className="overview-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="overview-info">
                        <h4>Best Achievement</h4>
                        <div id="best-achievement">
                          {currentGameType === 'chess' && (
                            <div><strong>{chessStats.best}</strong><br/><small>Highest rating achieved</small></div>
                          )}
                          {currentGameType === 'valorant' && (
                            <div><strong>{valorantStats.peak}</strong><br/><small>Peak rank achieved</small></div>
                          )}
                          {currentGameType === 'clash' && (
                            <div><strong>{clashStats.best}</strong><br/><small>Best trophy count</small></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* History Tab */}
                <div id="history-tab" className={`tab-panel ${activeTab === 'history' ? 'active' : ''}`}>
                  <div className="history-timeline">
                    <div className="timeline-item">
                      <div className="timeline-date">Today</div>
                      <div className="timeline-content">
                        <h5>Current Session</h5>
                        <p id="current-session">
                          {currentGameType === 'chess' && (
                            `Active since ${chessStats.lastUpdated} - Current rating: ${chessStats.rating}. Been practicing tactical puzzles and rapid games.`
                          )}
                          {currentGameType === 'valorant' && (
                            `Last active ${valorantStats.lastUpdated} - Currently ${valorantStats.rank} with ${valorantStats.rr}. Working on aim training and map knowledge.`
                          )}
                          {currentGameType === 'clash' && (
                            `Last battle ${clashStats.lastUpdated} - Currently at ${clashStats.trophies} trophies. Testing new deck combinations.`
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">This Week</div>
                      <div className="timeline-content">
                        <h5>Weekly Progress</h5>
                        <p id="weekly-progress">
                          {currentGameType === 'chess' && (
                            `Played ${chessStats.games} total games this period. Maintaining ${chessStats.winrate} win rate with consistent performance.`
                          )}
                          {currentGameType === 'valorant' && (
                            `Climbing steadily in competitive mode. Peak this week: ${valorantStats.peak}. Focusing on team coordination.`
                          )}
                          {currentGameType === 'clash' && (
                            `Won ${clashStats.wins} battles this period. Maintaining trophy count above 6000 consistently.`
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">This Month</div>
                      <div className="timeline-content">
                        <h5>Monthly Achievements</h5>
                        <p id="monthly-achievements">
                          {currentGameType === 'chess' && (
                            `Achieved ${chessStats.best} best rating this month. Focused on opening theory and endgame techniques.`
                          )}
                          {currentGameType === 'valorant' && (
                            `Reached ${valorantStats.peak} peak rank this month. Improved crosshair placement and game sense significantly.`
                          )}
                          {currentGameType === 'clash' && (
                            `Reached ${clashStats.best} best trophies this month. Mastered several meta deck strategies.`
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Achievements Tab */}
                <div id="achievements-tab" className={`tab-panel ${activeTab === 'achievements' ? 'active' : ''}`}>
                  <div className="achievements-grid">
                    <div className="achievement-card earned">
                      <div className="achievement-icon">
                        <i className="fas fa-medal"></i>
                      </div>
                      <div className="achievement-info">
                        <h5>First Victory</h5>
                        <p>Won your first ranked game</p>
                      </div>
                    </div>
                    <div className="achievement-card earned">
                      <div className="achievement-icon">
                        <i className="fas fa-crown"></i>
                      </div>
                      <div className="achievement-info">
                        <h5>Rank Climber</h5>
                        <p>Achieved your current rank</p>
                      </div>
                    </div>
                    <div className="achievement-card">
                      <div className="achievement-icon">
                        <i className="fas fa-fire"></i>
                      </div>
                      <div className="achievement-info">
                        <h5>Win Streak</h5>
                        <p>Win 10 games in a row</p>
                      </div>
                    </div>
                    <div className="achievement-card">
                      <div className="achievement-icon">
                        <i className="fas fa-diamond"></i>
                      </div>
                      <div className="achievement-info">
                        <h5>Master Tier</h5>
                        <p>Reach master rank</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
