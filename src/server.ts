import Hurx from '@hurx/core/src/library/framework/frontend/hurx'
import fs from 'fs'
import path from 'path'

const sourcePath = path.join(__dirname, '../../', 'core');
const targetPath = path.join(__dirname, '../', 'node_modules', '@hurx', 'core');

fs.rmSync(targetPath, {
    force: true,
    recursive: true
})

fs.symlinkSync(sourcePath, targetPath, 'dir')

Hurx.createInstance(({merge}) => merge({
    webpack: {
        config: {
            module: {
                rules: [
                    {
                        test: /\.(scss|sass)$/,
                        use: [
                            {
                                loader: 'style-loader',
                                options: {
                                    injectType: 'styleTag',
                                    styleTagTransform: function(css: string, style: Element) {
                                        style.id = `style-loader-${new Date().getTime()}`
                                        style.innerHTML = css
                                    }
                                }
                            },
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]
            }
        }
    }
}))