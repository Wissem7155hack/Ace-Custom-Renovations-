
import fs from 'fs';
import path from 'path';

// This script generates src/lib/allImages.ts with explicit imports for images in src/images

const imagesBaseDir = path.join(process.cwd(), 'src/images');
const outputFile = path.join(process.cwd(), 'src/lib/allImages.ts');

function generateValidVarName(name: string): string {
    return name.replace(/[^a-zA-Z0-9]/g, '_');
}

function processImages() {
    let imports = '';
    let exportImagesByFolder = 'export const imagesByFolder: Record<string, any[]> = {\n';
    let exportAllImages = 'export const allProjectImages: any[] = [\n';

    if (!fs.existsSync(imagesBaseDir)) {
        console.error('Images directory not found:', imagesBaseDir);
        return;
    }

    const items = fs.readdirSync(imagesBaseDir, { withFileTypes: true });
    let totalImages = 0;

    items.forEach(category => {
        if (category.isDirectory()) {
            const categoryName = category.name;
            const categoryVar = generateValidVarName(categoryName);

            const files = fs.readdirSync(path.join(imagesBaseDir, categoryName))
                .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file));

            const categoryImports: string[] = [];

            files.forEach((file, index) => {
                const importVar = `img_${categoryVar}_${index}`;
                // Using explicit verify import
                imports += `import ${importVar} from '@/images/${categoryName}/${file}';\n`;
                categoryImports.push(importVar);
            });

            if (categoryImports.length > 0) {
                exportImagesByFolder += `  "${categoryName}": [\n    ${categoryImports.join(',\n    ')}\n  ],\n`;
                exportAllImages += `  ...imagesByFolder["${categoryName}"],\n`;
                totalImages += categoryImports.length;
            } else {
                exportImagesByFolder += `  "${categoryName}": [],\n`;
            }
        }
    });

    exportImagesByFolder += '};\n';
    exportAllImages += '];\n';

    const fileContent = `// This file is auto-generated\n${imports}\n${exportImagesByFolder}\n${exportAllImages}`;

    fs.writeFileSync(outputFile, fileContent, { encoding: 'utf-8' });
    console.log(`Successfully generated ${outputFile} with ${totalImages} images.`);
}

processImages();
