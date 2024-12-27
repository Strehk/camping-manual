<script lang="ts">
    import { page } from '$app/stores';
    import { Button } from '$lib/components/ui/button';
    import { Tent, MapPin, ArrowLeft } from 'lucide-svelte';

    const getErrorIcon = (status: number) => {
        switch (status) {
            case 404:
                return MapPin;
            default:
                return Tent;
        }
    };

    const ErrorIcon = getErrorIcon($page.status);

    const getErrorTitle = (status: number) => {
        switch (status) {
            case 404:
                return "Campingplatz nicht gefunden";
            case 403:
                return "Privatgrundstück";
            case 500:
                return "Technische Störung";
            default:
                return "Ups, da ist etwas schiefgelaufen";
        }
    };

    const getErrorDescription = (status: number) => {
        switch (status) {
            case 404:
                return "Diese Stelle auf der Karte scheint es nicht zu geben. Lass uns zurück zum Basislager gehen.";
            case 403:
                return "Dieser Bereich ist leider nur für autorisierte Camper zugänglich.";
            case 500:
                return "In unserem Campingplatz gibt es gerade technische Schwierigkeiten. Versuch es später noch einmal.";
            default:
                return "Ein unerwartetes Problem ist aufgetreten. Zeit für einen Neustart!";
        }
    };
</script>

<div class="container min-h-[80vh] py-16 flex items-center justify-center">
    <div class="text-center max-w-md">
        <div class="flex justify-center">
            <div class="bg-primary/10 p-4 rounded-full">
                <ErrorIcon class="w-12 h-12 text-primary" />
            </div>
        </div>

        <div class="space-y-4">
            <h1 class="text-4xl font-bold tracking-tight">
                {getErrorTitle($page.status)}
            </h1>
            
            <p class="text-lg text-muted-foreground">
                {getErrorDescription($page.status)}
            </p>
        </div>

        <div class="flex flex-col sm:flex-row mt-4 sm:mt-0 justify-center gap-4">
            <Button variant="outline" href="/" class="gap-2">
                <ArrowLeft class="w-4 h-4" />
                Zum Basislager
            </Button>
            <Button variant="default" onclick={() => window.location.reload()}>
                Nochmal versuchen
            </Button>
        </div>
    </div>
</div>
