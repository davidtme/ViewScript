properties {
	$baseDir = resolve-path .\
	$target = join-path $baseDir 'Release'
	$nuget = join-path $baseDir 'packages\NuGet.CommandLine.2.8.3\tools'
}

task default -depends Publish

task Publish {
	New-Item -ItemType Directory -Force -Path $target
	$env:Path = $env:Path + ';' + $nuget
	cd "$baseDir\Source\ViewScript"
	exec { nuget pack "ViewScript.nuspec" -OutputDirectory "$target"  }
}