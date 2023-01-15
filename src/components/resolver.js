// naive ui 的 resolver
function NaiveUiResolver() {
  return {
    type: 'component',
    resolve: name => {
      if (name.match(/^(N[A-Z]|n-[a-z])/)) return { name, from: 'naive-ui' }
    }
  }
}

function ChnUiResolver() {
  return {
    type: 'component',
    resolve: name => {
      if (name.match(/^(Chn[A-Z]|chn-[a-z])/))
        return { name, from: '@chenhaonan22/chn-ui/components' }
    }
  }
}

export { ChnUiResolver }
