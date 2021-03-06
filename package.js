Package.describe({
  name: 'electricjesus:maximage2',
  summary: 'akv2/Maximage2, cycle, localscroll and scrollTo. Repackaged for Meteor 0.9.2+',
  version: '1.0.0',
  git: 'https://github.com/electricjesus/meteor-maximage2.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('jquery','client');
  api.add_files([
    'lib/maximage/lib/js/jquery.cycle.all.js',    
    'lib/maximage/lib/js/jquery.maximage.js',    
    'lib/maximage/lib/css/jquery.maximage.css'
  ],'client');
  api.addFiles('electricjesus:maximage2.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('electricjesus:maximage2','client');
  api.addFiles('electricjesus:maximage2-tests.js','client');
});
