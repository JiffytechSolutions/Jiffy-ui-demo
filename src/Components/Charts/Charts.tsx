import React, { useState } from 'react';
import { TextStyle, Button, Card, FlexLayout, Grid } from 'jiffy-ui';
import { ArrowRight, Copy, ExternalLink, TrendingUp, Activity } from 'jiffy-icons';
import { Link } from 'react-router-dom';

const Charts = () => {
    const [copiedCode, setCopiedCode] = useState('');

    const chartCategories = [
        {
            name: 'Line Charts',
            description: 'Perfect for showing trends over time',
           
            charts: [
                {
                    name: 'Revenue Trend',
                    description: 'Monthly revenue tracking with gradient fill',
                    preview: 'A smooth line chart showing revenue growth over 12 months',
                    code: `<div className="chart-container">
  <div className="chart-header">
    <h3>Revenue Trend</h3>
    <span className="chart-value">$124,573</span>
  </div>
  <div className="line-chart">
    {/* Chart implementation with your preferred library */}
    <svg viewBox="0 0 400 200">
      <path d="M0,150 Q100,100 200,80 T400,60" 
            stroke="#305EFF" strokeWidth="3" fill="none"/>
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#305EFF" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#305EFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0,150 Q100,100 200,80 T400,60 L400,200 L0,200 Z" 
            fill="url(#gradient)"/>
    </svg>
  </div>
</div>`
                },
                {
                    name: 'User Activity',
                    description: 'Daily active users with comparison',
                    preview: 'Multi-line chart comparing current vs previous period',
                    code: `<Card>
  <div className="chart-header">
    <h3>Daily Active Users</h3>
    <div className="chart-legend">
      <span className="legend-item current">This Month</span>
      <span className="legend-item previous">Last Month</span>
    </div>
  </div>
  <div className="multi-line-chart">
    {/* Implementation with React Chart.js or similar */}
    <canvas width="400" height="200"></canvas>
  </div>
</Card>`
                }
            ]
        },
        {
            name: 'Bar Charts',
            description: 'Great for comparing categories and values',
            
            charts: [
                {
                    name: 'Sales by Category',
                    description: 'Horizontal bar chart with custom colors',
                    preview: 'Horizontal bars showing sales performance by product category',
                    code: `<div className="bar-chart-container">
  <h3>Sales by Category</h3>
  <div className="horizontal-bars">
    {categories.map((category, index) => (
      <div key={index} className="bar-item">
        <span className="bar-label">{category.name}</span>
        <div className="bar-track">
          <div 
            className="bar-fill" 
            style={{ width: \`\${category.percentage}%\` }}
          />
        </div>
        <span className="bar-value">{category.value}</span>
      </div>
    ))}
  </div>
</div>`
                },
                {
                    name: 'Monthly Comparison',
                    description: 'Vertical bars with gradient effects',
                    preview: 'Vertical bar chart comparing monthly performance',
                    code: `<Card>
  <div className="chart-header">
    <h3>Monthly Comparison</h3>
    <div className="chart-period">
      <Button variant="Tertiary" size="Small">Last 6 Months</Button>
    </div>
  </div>
  <div className="vertical-bars">
    {monthlyData.map((month, index) => (
      <div key={index} className="bar-column">
        <div 
          className="bar" 
          style={{ height: \`\${month.height}px\` }}
        />
        <span className="month-label">{month.name}</span>
      </div>
    ))}
  </div>
</Card>`
                }
            ]
        },
        {
            name: 'Pie Charts',
            description: 'Ideal for showing proportions and percentages',
           
            charts: [
                {
                    name: 'Traffic Sources',
                    description: 'Donut chart with interactive segments',
                    preview: 'Donut chart showing website traffic sources',
                    code: `<div className="pie-chart-container">
  <h3>Traffic Sources</h3>
  <div className="donut-chart">
    <svg viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="60" 
              stroke="#305EFF" strokeWidth="20" 
              fill="transparent" strokeDasharray="189 377"/>
      <circle cx="100" cy="100" r="60" 
              stroke="#10B981" strokeWidth="20" 
              fill="transparent" strokeDasharray="113 377"
              strokeDashoffset="-189"/>
      {/* More segments */}
    </svg>
    <div className="chart-center">
      <span className="total-value">100%</span>
    </div>
  </div>
  <div className="chart-legend">
    {sources.map((source, index) => (
      <div key={index} className="legend-item">
        <div className="legend-color" style={{backgroundColor: source.color}}/>
        <span>{source.name}: {source.percentage}%</span>
      </div>
    ))}
  </div>
</div>`
                },
                {
                    name: 'Budget Breakdown',
                    description: 'Simple pie chart with spending categories',
                    preview: 'Clean pie chart for budget visualization',
                    code: `<Card>
  <div className="chart-header">
    <h3>Budget Breakdown</h3>
    <span className="total-budget">$5,420</span>
  </div>
  <div className="pie-chart">
    {/* Pie chart implementation */}
    <div className="pie-segments">
      {budgetCategories.map((category, index) => (
        <div 
          key={index}
          className="pie-segment"
          style={{
            '--start-angle': category.startAngle,
            '--end-angle': category.endAngle,
            '--color': category.color
          }}
        />
      ))}
    </div>
  </div>
</Card>`
                }
            ]
        },
        {
            name: 'Dashboard Widgets',
            description: 'Small charts and metrics for dashboards',
            icon: <Activity size={24} />,
            charts: [
                {
                    name: 'KPI Cards',
                    description: 'Metric cards with mini charts',
                    preview: 'Compact cards showing key performance indicators',
                    code: `<Grid columns={{ lg: 4, md: 2 }}>
  <Card className="kpi-card">
    <div className="kpi-header">
      <div className="kpi-icon">
        <DollarSign size={20} />
      </div>
      <span className="kpi-trend positive">+12%</span>
    </div>
    <div className="kpi-value">$24,573</div>
    <div className="kpi-label">Total Revenue</div>
    <div className="kpi-chart">
      {/* Mini sparkline chart */}
    </div>
  </Card>
  {/* More KPI cards */}
</Grid>`
                },
                {
                    name: 'Progress Rings',
                    description: 'Circular progress indicators',
                    preview: 'Animated circular progress bars for goals',
                    code: `<div className="progress-rings">
  {goals.map((goal, index) => (
    <div key={index} className="progress-ring">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" 
                stroke="#e2e8f0" strokeWidth="8" 
                fill="transparent"/>
        <circle cx="60" cy="60" r="50" 
                stroke="#305EFF" strokeWidth="8" 
                fill="transparent"
                strokeDasharray="314"
                strokeDashoffset={314 - (314 * goal.progress / 100)}
                className="progress-circle"/>
      </svg>
      <div className="progress-content">
        <span className="progress-value">{goal.progress}%</span>
        <span className="progress-label">{goal.label}</span>
      </div>
    </div>
  ))}
</div>`
                }
            ]
        },
        {
            name: 'Advanced Charts',
            description: 'Complex visualizations for detailed analysis',
            icon: <TrendingUp size={24} />,
            charts: [
                {
                    name: 'Heatmap Calendar',
                    description: 'Activity heatmap similar to GitHub contributions',
                    preview: 'Calendar-style heatmap showing daily activity',
                    code: `<div className="heatmap-calendar">
  <h3>Activity Heatmap</h3>
  <div className="heatmap-grid">
    {weeks.map((week, weekIndex) => (
      <div key={weekIndex} className="heatmap-week">
        {week.days.map((day, dayIndex) => (
          <div 
            key={dayIndex}
            className="heatmap-day"
            style={{
              backgroundColor: getHeatmapColor(day.activity)
            }}
            title={\`\${day.date}: \${day.activity} activities\`}
          />
        ))}
      </div>
    ))}
  </div>
  <div className="heatmap-legend">
    <span>Less</span>
    <div className="legend-scale">
      {[0, 1, 2, 3, 4].map(level => (
        <div 
          key={level}
          className="legend-square"
          style={{ backgroundColor: getHeatmapColor(level) }}
        />
      ))}
    </div>
    <span>More</span>
  </div>
</div>`
                },
                {
                    name: 'Funnel Chart',
                    description: 'Sales funnel visualization',
                    preview: 'Conversion funnel showing user journey',
                    code: `<Card>
  <h3>Sales Funnel</h3>
  <div className="funnel-chart">
    {funnelStages.map((stage, index) => (
      <div key={index} className="funnel-stage">
        <div 
          className="funnel-bar"
          style={{ width: \`\${stage.percentage}%\` }}
        >
          <span className="stage-label">{stage.name}</span>
          <span className="stage-value">{stage.value}</span>
        </div>
        <div className="stage-conversion">
          {index > 0 && (
            <span className="conversion-rate">
              {stage.conversionRate}% conversion
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
</Card>`
                }
            ]
        }
    ];

    const copyToClipboard = (code: string, chartId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(chartId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    return (
        <div className="charts-page">
            <div className="page-container">
                {/* Header */}
                <div className="page-header">
                    <FlexLayout direction="column" gap={4}>
                        <div>
                            <TextStyle as="h1" type="2XlHeading">
                                Chart Components
                            </TextStyle>
                            <TextStyle as="p" type="LgBody" textColor="Secondary">
                                Beautiful, responsive chart components and data visualizations built with modern web standards.
                                Copy the code and integrate with your favorite charting library.
                            </TextStyle>
                        </div>
                        
                        <FlexLayout gap={3}>
                            <Link to="/pannel">
                                <Button variant="Secondary" alignIcon="Left">
                                    View Components
                                </Button>
                            </Link>
                            <a 
                                href="https://github.com/jiffytechsolutions/JiffyDemo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button variant="Tertiary" icon={<ExternalLink size={16} />} alignIcon="Right">
                                    GitHub
                                </Button>
                            </a>
                        </FlexLayout>
                    </FlexLayout>
                </div>

                {/* Integration Notice */}
                <Card variant="outlined" className="integration-notice">
                    <FlexLayout direction="column" gap={3}>
                        <div className="notice-header">
                            <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                               
                                <TextStyle as="h3" type="LgHeading">
                                    Chart Library Integration
                                </TextStyle>
                            </FlexLayout>
                        </div>
                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                            These chart templates are designed to work with popular charting libraries like Chart.js, Recharts, 
                            D3.js, or ApexCharts. The code snippets provide the structure and styling, while you can integrate 
                            your preferred data visualization library for the actual chart rendering.
                        </TextStyle>
                        <FlexLayout gap={2}>
                            <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">
                                <Button variant="Tertiary" size="Small">Chart.js</Button>
                            </a>
                            <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer">
                                <Button variant="Tertiary" size="Small">Recharts</Button>
                            </a>
                            <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
                                <Button variant="Tertiary" size="Small">D3.js</Button>
                            </a>
                        </FlexLayout>
                    </FlexLayout>
                </Card>

                {/* Chart Categories */}
                <div className="charts-content">
                    <FlexLayout direction="column" gap={4}>
                        {chartCategories.map((category, categoryIndex) => (
                            <section key={categoryIndex} className="chart-category">
                                <FlexLayout direction="column" gap={4}>
                                    <div className="category-header">
                                        <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                            <div className="category-icon">
                                                {category.icon}
                                            </div>
                                            <div>
                                                <TextStyle as="h2" type="XlHeading">
                                                    {category.name}
                                                </TextStyle>
                                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                    {category.description}
                                                </TextStyle>
                                            </div>
                                        </FlexLayout>
                                    </div>

                                    <Grid columns={{ lg: 2, md: 1 }} gap={{ lg: "24px" }}>
                                        {category.charts.map((chart, chartIndex) => (
                                            <Card key={chartIndex} variant="outlined" className="chart-card">
                                                <FlexLayout direction="column" gap={4}>
                                                    <div className="chart-header">
                                                        <TextStyle as="h3" type="LgHeading">
                                                            {chart.name}
                                                        </TextStyle>
                                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                            {chart.description}
                                                        </TextStyle>
                                                    </div>

                                                    <div className="chart-preview">
                                                        <div className="preview-placeholder">
                                                            <TextStyle as="p" type="SmBody" textColor="Secondary">
                                                                {chart.preview}
                                                            </TextStyle>
                                                        </div>
                                                    </div>

                                                    <div className="chart-code">
                                                        <div className="code-header">
                                                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                                React/TSX
                                                            </TextStyle>
                                                            <Button
                                                                variant="Tertiary"
                                                                size="Small"
                                                                icon={copiedCode === `${categoryIndex}-${chartIndex}` ? 
                                                                    <span>✓</span> : <Copy size={14} />}
                                                                onClick={() => copyToClipboard(chart.code, `${categoryIndex}-${chartIndex}`)}
                                                            >
                                                                {copiedCode === `${categoryIndex}-${chartIndex}` ? 'Copied!' : 'Copy'}
                                                            </Button>
                                                        </div>
                                                        <pre className="code-block">
                                                            <code>{chart.code}</code>
                                                        </pre>
                                                    </div>
                                                </FlexLayout>
                                            </Card>
                                        ))}
                                    </Grid>
                                </FlexLayout>
                            </section>
                        ))}
                    </FlexLayout>
                </div>

                {/* Call to Action */}
                <div className="charts-cta">
                    <Card variant="outlined" className="cta-card">
                        <FlexLayout direction="column" gap={4} blockAlign={{ lg: "center" }}>
                            <div className="cta-content">
                                <TextStyle as="h3" type="XlHeading">
                                    Ready to build your dashboard?
                                </TextStyle>
                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                    Combine these chart components with our UI components to create 
                                    beautiful dashboards and analytics interfaces.
                                </TextStyle>
                            </div>
                            <FlexLayout gap={3}>
                                <Link to="/pannel">
                                    <Button color="Primary" icon={<ArrowRight size={16} />} alignIcon="Right">
                                        Browse Components
                                    </Button>
                                </Link>
                                <Link to="/blocks">
                                    <Button variant="Secondary">
                                        View Dashboard Blocks
                                    </Button>
                                </Link>
                            </FlexLayout>
                        </FlexLayout>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Charts;
