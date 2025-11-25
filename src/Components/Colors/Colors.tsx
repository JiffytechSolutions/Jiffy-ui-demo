import React from 'react';
import { TextStyle, Button, Card, FlexLayout, Grid, FlexLayoutItem } from 'jiffy-ui';
import { ArrowRight, Download, EyeOff } from 'jiffy-icons';
import { Link } from 'react-router-dom';

const Colors = () => {
    // const [copiedColor, setCopiedColor] = useState('');

    const colorCategories = [
        {
            name: 'Primary Colors',
            description: 'Main brand colors used throughout the interface',
            colors: [
                { name: 'Primary 50', hex: '#eff6ff', rgb: '239, 246, 255', hsl: '214, 100%, 97%' },
                { name: 'Primary 100', hex: '#dbeafe', rgb: '219, 234, 254', hsl: '214, 95%, 93%' },
                { name: 'Primary 200', hex: '#bfdbfe', rgb: '191, 219, 254', hsl: '213, 97%, 87%' },
                { name: 'Primary 300', hex: '#93c5fd', rgb: '147, 197, 253', hsl: '212, 96%, 78%' },
                { name: 'Primary 400', hex: '#60a5fa', rgb: '96, 165, 250', hsl: '213, 93%, 68%' },
                { name: 'Primary 500', hex: '#305EFF', rgb: '48, 94, 255', hsl: '227, 100%, 59%' },
                { name: 'Primary 600', hex: '#2451E5', rgb: '36, 81, 229', hsl: '226, 80%, 52%' },
                { name: 'Primary 700', hex: '#1e40af', rgb: '30, 64, 175', hsl: '226, 71%, 40%' },
                { name: 'Primary 800', hex: '#1e3a8a', rgb: '30, 58, 138', hsl: '224, 64%, 33%' },
                { name: 'Primary 900', hex: '#1e3a8a', rgb: '30, 58, 138', hsl: '224, 64%, 33%' }
            ]
        },
        {
            name: 'Neutral Colors',
            description: 'Gray scale colors for text, backgrounds, and borders',
            colors: [
                { name: 'Gray 50', hex: '#f8fafc', rgb: '248, 250, 252', hsl: '210, 20%, 98%' },
                { name: 'Gray 100', hex: '#f1f5f9', rgb: '241, 245, 249', hsl: '210, 20%, 96%' },
                { name: 'Gray 200', hex: '#e2e8f0', rgb: '226, 232, 240', hsl: '214, 20%, 91%' },
                { name: 'Gray 300', hex: '#cbd5e1', rgb: '203, 213, 225', hsl: '213, 20%, 84%' },
                { name: 'Gray 400', hex: '#94a3b8', rgb: '148, 163, 184', hsl: '215, 20%, 65%' },
                { name: 'Gray 500', hex: '#64748b', rgb: '100, 116, 139', hsl: '215, 16%, 47%' },
                { name: 'Gray 600', hex: '#475569', rgb: '71, 85, 105', hsl: '215, 19%, 35%' },
                { name: 'Gray 700', hex: '#334155', rgb: '51, 65, 85', hsl: '215, 25%, 27%' },
                { name: 'Gray 800', hex: '#1e293b', rgb: '30, 41, 59', hsl: '217, 33%, 17%' },
                { name: 'Gray 900', hex: '#0f172a', rgb: '15, 23, 42', hsl: '222, 47%, 11%' }
            ]
        },
        {
            name: 'Success Colors',
            description: 'Green colors for positive actions and success states',
            colors: [
                { name: 'Success 50', hex: '#f0fdf4', rgb: '240, 253, 244', hsl: '138, 76%, 97%' },
                { name: 'Success 100', hex: '#dcfce7', rgb: '220, 252, 231', hsl: '141, 84%, 93%' },
                { name: 'Success 200', hex: '#bbf7d0', rgb: '187, 247, 208', hsl: '141, 79%, 85%' },
                { name: 'Success 300', hex: '#86efac', rgb: '134, 239, 172', hsl: '142, 77%, 73%' },
                { name: 'Success 400', hex: '#4ade80', rgb: '74, 222, 128', hsl: '142, 69%, 58%' },
                { name: 'Success 500', hex: '#10b981', rgb: '16, 185, 129', hsl: '160, 84%, 39%' },
                { name: 'Success 600', hex: '#059669', rgb: '5, 150, 105', hsl: '161, 94%, 30%' },
                { name: 'Success 700', hex: '#047857', rgb: '4, 120, 87', hsl: '163, 94%, 24%' },
                { name: 'Success 800', hex: '#065f46', rgb: '6, 95, 70', hsl: '163, 88%, 20%' },
                { name: 'Success 900', hex: '#064e3b', rgb: '6, 78, 59', hsl: '164, 86%, 16%' }
            ]
        },
        {
            name: 'Warning Colors',
            description: 'Orange/Yellow colors for warnings and caution states',
            colors: [
                { name: 'Warning 50', hex: '#fffbeb', rgb: '255, 251, 235', hsl: '48, 100%, 96%' },
                { name: 'Warning 100', hex: '#fef3c7', rgb: '254, 243, 199', hsl: '48, 96%, 89%' },
                { name: 'Warning 200', hex: '#fde68a', rgb: '253, 230, 138', hsl: '48, 97%, 77%' },
                { name: 'Warning 300', hex: '#fcd34d', rgb: '252, 211, 77', hsl: '46, 97%, 65%' },
                { name: 'Warning 400', hex: '#fbbf24', rgb: '251, 191, 36', hsl: '43, 96%, 56%' },
                { name: 'Warning 500', hex: '#f59e0b', rgb: '245, 158, 11', hsl: '38, 92%, 50%' },
                { name: 'Warning 600', hex: '#d97706', rgb: '217, 119, 6', hsl: '32, 95%, 44%' },
                { name: 'Warning 700', hex: '#b45309', rgb: '180, 83, 9', hsl: '26, 90%, 37%' },
                { name: 'Warning 800', hex: '#92400e', rgb: '146, 64, 14', hsl: '23, 83%, 31%' },
                { name: 'Warning 900', hex: '#78350f', rgb: '120, 53, 15', hsl: '22, 78%, 26%' }
            ]
        },
        {
            name: 'Error Colors',
            description: 'Red colors for errors and destructive actions',
            colors: [
                { name: 'Error 50', hex: '#fef2f2', rgb: '254, 242, 242', hsl: '0, 86%, 97%' },
                { name: 'Error 100', hex: '#fee2e2', rgb: '254, 226, 226', hsl: '0, 93%, 94%' },
                { name: 'Error 200', hex: '#fecaca', rgb: '254, 202, 202', hsl: '0, 96%, 89%' },
                { name: 'Error 300', hex: '#fca5a5', rgb: '252, 165, 165', hsl: '0, 93%, 82%' },
                { name: 'Error 400', hex: '#f87171', rgb: '248, 113, 113', hsl: '0, 91%, 71%' },
                { name: 'Error 500', hex: '#ef4444', rgb: '239, 68, 68', hsl: '0, 84%, 60%' },
                { name: 'Error 600', hex: '#dc2626', rgb: '220, 38, 38', hsl: '0, 73%, 51%' },
                { name: 'Error 700', hex: '#b91c1c', rgb: '185, 28, 28', hsl: '0, 74%, 42%' },
                { name: 'Error 800', hex: '#991b1b', rgb: '153, 27, 27', hsl: '0, 70%, 35%' },
                { name: 'Error 900', hex: '#7f1d1d', rgb: '127, 29, 29', hsl: '0, 63%, 31%' }
            ]
        },
        {
            name: 'Info Colors',
            description: 'Blue colors for informational states and highlights',
            colors: [
                { name: 'Info 50', hex: '#eff6ff', rgb: '239, 246, 255', hsl: '214, 100%, 97%' },
                { name: 'Info 100', hex: '#dbeafe', rgb: '219, 234, 254', hsl: '214, 95%, 93%' },
                { name: 'Info 200', hex: '#bfdbfe', rgb: '191, 219, 254', hsl: '213, 97%, 87%' },
                { name: 'Info 300', hex: '#93c5fd', rgb: '147, 197, 253', hsl: '212, 96%, 78%' },
                { name: 'Info 400', hex: '#60a5fa', rgb: '96, 165, 250', hsl: '213, 93%, 68%' },
                { name: 'Info 500', hex: '#3b82f6', rgb: '59, 130, 246', hsl: '217, 91%, 60%' },
                { name: 'Info 600', hex: '#2563eb', rgb: '37, 99, 235', hsl: '221, 83%, 53%' },
                { name: 'Info 700', hex: '#1d4ed8', rgb: '29, 78, 216', hsl: '224, 76%, 48%' },
                { name: 'Info 800', hex: '#1e40af', rgb: '30, 64, 175', hsl: '226, 71%, 40%' },
                { name: 'Info 900', hex: '#1e3a8a', rgb: '30, 58, 138', hsl: '224, 64%, 33%' }
            ]
        }
    ];

    const usageExamples = [
        {
            title: 'Background Colors',
            description: 'Use lighter shades for backgrounds and surfaces',
            examples: [
                { usage: 'Main background', color: 'Gray 50', variable: '--bg-primary' },
                { usage: 'Card background', color: 'Gray 100', variable: '--bg-secondary' },
                { usage: 'Hover state', color: 'Gray 200', variable: '--bg-hover' }
            ]
        },
        {
            title: 'Text Colors',
            description: 'Use darker shades for readable text content',
            examples: [
                { usage: 'Primary text', color: 'Gray 900', variable: '--text-primary' },
                { usage: 'Secondary text', color: 'Gray 600', variable: '--text-secondary' },
                { usage: 'Muted text', color: 'Gray 400', variable: '--text-muted' }
            ]
        },
        {
            title: 'Action Colors',
            description: 'Use medium shades for interactive elements',
            examples: [
                { usage: 'Primary button', color: 'Primary 500', variable: '--accent-primary' },
                { usage: 'Success button', color: 'Success 500', variable: '--accent-success' },
                { usage: 'Error button', color: 'Error 500', variable: '--accent-error' }
            ]
        }
    ];

    // const copyToClipboard = (text: string, colorId: string) => {
    //     navigator.clipboard.writeText(text);
    //     setCopiedColor(colorId);
    //     setTimeout(() => setCopiedColor(''), 2000);
    // };

    const downloadColorPalette = () => {
        const cssVariables = colorCategories.map(category => 
            `/* ${category.name} */\n` +
            category.colors.map(color => 
                `  --${color.name.toLowerCase().replace(/\s+/g, '-')}: ${color.hex};`
            ).join('\n')
        ).join('\n\n');

        const cssContent = `:root {\n${cssVariables}\n}`;

        const blob = new Blob([cssContent], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jiffy-ui-colors.css';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="colors-page">
            <div className="page-container">
                {/* Header */}
                <div className="page-header">
                    <FlexLayout direction="column" gap={4}>
                        <div>
                            <TextStyle as="h1" type="2XlHeading">
                                Color System
                            </TextStyle>
                            <TextStyle as="p" type="LgBody" textColor="Secondary">
                                A comprehensive color palette designed for accessibility, consistency, and beauty.
                                Use these colors to create cohesive and professional interfaces.
                            </TextStyle>
                        </div>
                        
                        <FlexLayout gap={3}>
                            <FlexLayoutItem>
                            <Button 
                                color="Primary" 
                                icon={<Download size={16} />}
                                onClick={downloadColorPalette}
                                alignIcon="Left"
                            >
                                Download Palette
                            </Button>
                            </FlexLayoutItem>
                            <FlexLayoutItem>
                            <Link to="/themes">
                                <Button variant="Secondary" alignIcon="Left">
                                    View Themes
                                </Button>
                            </Link>
                            </FlexLayoutItem>
                            <FlexLayoutItem>
                            <Link to="/pannel">
                                <Button variant="Tertiary" alignIcon="Left">
                                    Components
                                </Button>
                            </Link>
                            </FlexLayoutItem>
                        </FlexLayout>
                    </FlexLayout>
                </div>

                {/* Color Categories */}
                <div className="colors-content">
                    <FlexLayout direction="column" gap={3}>
                        {colorCategories.map((category, categoryIndex) => (
                            <FlexLayoutItem>
                            <section key={categoryIndex} className="color-category">
                                <FlexLayout direction="column" gap={4}>
                                    <FlexLayoutItem>
                                    <div className="category-header">
                                        <TextStyle as="h2" size='2xl' fontWeight='bold'>
                                            {category.name}
                                        </TextStyle>
                                        <TextStyle as="p" size='md' tone='subdued'>
                                            {category.description}
                                        </TextStyle>
                                    </div>
                                    </FlexLayoutItem>
                                    <FlexLayoutItem>
                                    <FlexLayout gap={4}>
                                        {category.colors.map((color, colorIndex) => (
                                            <FlexLayoutItem cols={{sm:'12',md:'6',lg:'3'}}>
                                                <Card key={colorIndex} variant="outlined" className="color-card">
                                                    <FlexLayout direction="column" gap={3}>
                                                        <FlexLayoutItem>
                                                        <div 
                                                            className="color-swatch-large"
                                                            style={{ backgroundColor: color.hex }}
                                                        >
                                                            {/* <div className="swatch-overlay">
                                                                <Button
                                                                    variant="Tertiary"
                                                                    size="Small"
                                                                    icon={<Eye size={14} />}
                                                                    className="preview-btn"
                                                                />
                                                            </div> */}
                                                        </div>
                                                        </FlexLayoutItem>
                                                        <FlexLayoutItem>
                                                        <div className="color-info">
                                                            <TextStyle as="h4" size='md' fontWeight='semibold'>
                                                                {color.name}
                                                            </TextStyle>
                                                            
                                                            <div className="color-values">
                                                                <div className="value-row">
                                                                    <span className="value-label">HEX</span>
                                                                    <div className="value-container">
                                                                        <code className="value-code">{color.hex}</code>
                                                                        {/* <Button
                                                                            variant="Tertiary"
                                                                            size="Small"
                                                                            icon={copiedColor === `${categoryIndex}-${colorIndex}-hex` ? 
                                                                                <span>✓</span> : <Copy size={12} />}
                                                                            onClick={() => copyToClipboard(color.hex, `${categoryIndex}-${colorIndex}-hex`)}
                                                                        /> */}
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="value-row">
                                                                    <span className="value-label">RGB</span>
                                                                    <div className="value-container">
                                                                        <code className="value-code">{color.rgb}</code>
                                                                        {/* <Button
                                                                            variant="Tertiary"
                                                                            size="Small"
                                                                            icon={copiedColor === `${categoryIndex}-${colorIndex}-rgb` ? 
                                                                                <span>✓</span> : <Copy size={12} />}
                                                                            onClick={() => copyToClipboard(`rgb(${color.rgb})`, `${categoryIndex}-${colorIndex}-rgb`)}
                                                                        /> */}
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="value-row">
                                                                    <span className="value-label">HSL</span>
                                                                    <div className="value-container">
                                                                        <code className="value-code">{color.hsl}</code>
                                                                        {/* <Button
                                                                            variant="Tertiary"
                                                                            size="Small"
                                                                            icon={copiedColor === `${categoryIndex}-${colorIndex}-hsl` ? 
                                                                                <span>✓</span> : <Copy size={12} />}
                                                                            onClick={() => copyToClipboard(`hsl(${color.hsl})`, `${categoryIndex}-${colorIndex}-hsl`)}
                                                                        /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </FlexLayoutItem>
                                                    </FlexLayout>
                                                </Card>
                                            </FlexLayoutItem>
                                        ))}
                                    </FlexLayout>
                                    </FlexLayoutItem>
                                </FlexLayout>
                            </section>
                            </FlexLayoutItem>
                        ))}
                    </FlexLayout>
                </div>

                {/* Usage Examples */}
                <section className="usage-section">
                    <div className="section-header">
                        <TextStyle as="h2" type="XlHeading">
                            Usage Guidelines
                        </TextStyle>
                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                            Learn how to use colors effectively in your designs for optimal accessibility and user experience.
                        </TextStyle>
                    </div>

                    <Grid columns={{ lg: 3, md: 2, sm: 1 }} gap={{ lg: "24px" }}>
                        {usageExamples.map((example, index) => (
                            <Card key={index} variant="outlined" className="usage-card">
                                <FlexLayout direction="column" gap={4}>
                                    <div className="usage-header">
                                        <TextStyle as="h3" type="LgHeading">
                                            {example.title}
                                        </TextStyle>
                                        <TextStyle as="p" type="SmBody" textColor="Secondary">
                                            {example.description}
                                        </TextStyle>
                                    </div>

                                    <div className="usage-examples">
                                        {example.examples.map((ex, exIndex) => (
                                            <div key={exIndex} className="usage-example">
                                                <div className="usage-demo">
                                                    <div className="demo-element" style={{
                                                        backgroundColor: ex.usage.includes('background') ? 'var(--bg-secondary)' : 'transparent',
                                                        color: ex.usage.includes('text') ? 'var(--text-primary)' : 'inherit',
                                                        border: ex.usage.includes('button') ? '1px solid var(--accent-primary)' : 'none',
                                                        borderRadius: ex.usage.includes('button') ? '6px' : '0',
                                                        padding: '8px 12px'
                                                    }}>
                                                        {ex.usage}
                                                    </div>
                                                </div>
                                                <div className="usage-details">
                                                    <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                        {ex.color}
                                                    </TextStyle>
                                                    <code className="variable-code">{ex.variable}</code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </FlexLayout>
                            </Card>
                        ))}
                    </Grid>
                </section>

                {/* Accessibility Guidelines */}
                <section className="accessibility-section">
                    <Card variant="outlined" className="accessibility-card">
                        <FlexLayout direction="column" gap={4}>
                            <div className="section-header">
                                <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                    <div className="accessibility-icon">
                                        <EyeOff size={24} />
                                    </div>
                                    <div>
                                        <TextStyle as="h3" type="XlHeading">
                                            Accessibility Guidelines
                                        </TextStyle>
                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                            Ensure your designs are accessible to all users by following these color guidelines.
                                        </TextStyle>
                                    </div>
                                </FlexLayout>
                            </div>

                            <Grid columns={{ lg: 2, md: 1 }} gap={{ lg: "32px" }}>
                                <div className="guideline-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        Contrast Ratios
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Maintain proper contrast ratios for text legibility:
                                    </TextStyle>
                                    <ul className="guideline-list">
                                        <li>Normal text: 4.5:1 minimum</li>
                                        <li>Large text: 3:1 minimum</li>
                                        <li>UI components: 3:1 minimum</li>
                                    </ul>
                                </div>

                                <div className="guideline-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        Color Independence
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Don't rely solely on color to convey information:
                                    </TextStyle>
                                    <ul className="guideline-list">
                                        <li>Use icons alongside color</li>
                                        <li>Provide text labels</li>
                                        <li>Use patterns or shapes</li>
                                    </ul>
                                </div>

                                <div className="guideline-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        Focus States
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Ensure interactive elements have clear focus indicators:
                                    </TextStyle>
                                    <ul className="guideline-list">
                                        <li>Use high contrast outlines</li>
                                        <li>Minimum 3px focus ring</li>
                                        <li>Consistent across all elements</li>
                                    </ul>
                                </div>

                                <div className="guideline-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        Color Blindness
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Design with color vision deficiencies in mind:
                                    </TextStyle>
                                    <ul className="guideline-list">
                                        <li>Avoid red-green combinations</li>
                                        <li>Test with simulators</li>
                                        <li>Use multiple visual cues</li>
                                    </ul>
                                </div>
                            </Grid>
                        </FlexLayout>
                    </Card>
                </section>

                {/* Call to Action */}
                <div className="colors-cta">
                    <Card variant="outlined" className="cta-card">
                        <FlexLayout direction="column" gap={4} blockAlign={{ lg: "center" }}>
                            <div className="cta-content">
                                <TextStyle as="h3" type="XlHeading">
                                    Start building with our colors
                                </TextStyle>
                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                    Use these carefully crafted colors in your Jiffy UI components to create 
                                    beautiful and accessible user interfaces.
                                </TextStyle>
                            </div>
                            <FlexLayout gap={3}>
                                <Link to="/pannel">
                                    <Button color="Primary" icon={<ArrowRight size={16} />} alignIcon="Right">
                                        Browse Components
                                    </Button>
                                </Link>
                                <Link to="/themes">
                                    <Button variant="Secondary">
                                        Explore Themes
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

export default Colors;
