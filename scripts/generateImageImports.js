const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'src', 'images');
let imports = [];
let exportsArr = [];
let idx = 1;
const categorized = {};

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            walk(full);
        } else if (/\.(png|jpe?g|gif)$/i.test(file)) {
            const rel = path
                .relative(path.join(process.cwd(), 'src'), full)
                .replace(/\\/g, '/');
            const varName = `img${idx++}`;
            imports.push(`import ${varName} from '@/${rel}';`);
            exportsArr.push(varName);

            // categorize by first folder under images
            const parts = rel.split('/');
            const folder = parts.length > 1 ? parts[1] : 'root';
            if (!categorized[folder]) categorized[folder] = [];
            categorized[folder].push(varName);
        }
    }
}

walk(base);

console.log(imports.join('\n'));
console.log('\nexport const allProjectImages = [' + exportsArr.join(',') + '];');

// print category mapping
console.log('\nexport const imagesByFolder = {');
for (const folder of Object.keys(categorized)) {
    console.log(`  "${folder}": [${categorized[folder].join(',')}],`);
}
console.log('};');
