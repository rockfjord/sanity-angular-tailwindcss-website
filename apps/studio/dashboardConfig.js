export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rockfjord/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6173424a9ffec766bc1e200e',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-cyh2azrm',
                  apiId: '3fd8d34a-34b7-43a0-873c-f2feba2aeb43'
                },
                {
                  buildHookId: '6173424bc0df926a1431d959',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-gvrsy252',
                  apiId: 'a0e51711-d4e3-4da9-8809-9e2cb9006140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rockfjord/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-gvrsy252.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
