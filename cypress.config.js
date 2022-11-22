const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  projectId: "x1xdqk",
  
  e2e: {
    baseUrl: "https://www.apple.com",
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      on('after:screenshot', (details) => { 
        
        if (details.testFailure) {
          const newPath = details.path.slice(0, -4) + ` ${details.takenAt.replace(/:/g,".") +".png"}`
          return new Promise((resolve, reject) => {  
            fs.rename(details.path, newPath, (err) => {
              if (err) return reject(err)  
              resolve({ path: newPath })
            })
        })
      }
    })

    },
  },
})