$root = 'c:\Users\User\Desktop\web design\web design updated projects\53-tech-startup-webpage'
$files = Get-ChildItem -Path $root -Recurse -File -Include *.html, *.js | Where-Object { $_.FullName -notmatch '\\.history\\' }
$replacements = @(
    'homepage_b2b_saa_s_platform.html', 'home.html',
    'solutions_industry_specific.html', 'solutions.html',
    'features_interactive_comparison.html', 'features.html',
    'pricing_roi_focused.html', 'pricing.html',
    'resources_authority_hub.html', 'resources.html',
    'customer_stories_success_narratives.html', 'customers.html',
    'about_mission_team.html', 'about.html',
    'contact_intelligent_routing.html', 'contact.html'
)

foreach ($file in $files) {
    $text = Get-Content -LiteralPath $file.FullName -Raw
    $original = $text

    for ($index = 0; $index -lt $replacements.Count; $index += 2) {
        $text = $text.Replace($replacements[$index], $replacements[$index + 1])
    }

    if ($text -ne $original) {
        Set-Content -LiteralPath $file.FullName -Value $text
    }
}
