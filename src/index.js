import GameManager from './gameManager';

$(function () {
    "use strict";
    let gameManager = new GameManager();
    let pageManager = gameManager.pageManager;
    gameManager.initialization();
    initClickEvent();

    $("#save-button").on("click", ()=>{
        localStorage.setItem("CONFIG_MANAGER", JSON.stringify(gameManager.configManager));
    });

    $("#load-button").on("click", ()=>{
        let configManagerJson = JSON.parse(localStorage.getItem("CONFIG_MANAGER"));

    });

    function initClickEvent() {
        // CLICK EVENTS
        $("#user-name-input-button").on("click", () => gameManager.getUserNameFromModal());
        // 1. CLICK TO THE RESOURCES
        $(pageManager.foodClickButton).on("click", () => gameManager.clickResourceButton(gameManager.configManager.food, gameManager.configManager.clickEfficiency));
        $(pageManager.woodClickButton).on("click", () => gameManager.clickResourceButton(gameManager.configManager.wood, gameManager.configManager.clickEfficiency));
        $(pageManager.stoneClickButton).on("click", () => gameManager.clickResourceButton(gameManager.configManager.stone, gameManager.configManager.clickEfficiency));
        // 2. START AGAIN
        $(pageManager.startAgainButton).on("click", () => gameManager.reloadSite());
        $(pageManager.pauseButton).on("click", () => gameManager.pause());
        $(pageManager.getFullButton).on("click", () => gameManager.getFullResources());
        // 3. CREATE WORKER
        $(pageManager.createCitizenButton).on("click", () => gameManager.createWorker(1));
        // 4. BUILD
        $(pageManager.buildGraveButton).on("click", () => gameManager.build("grave"));
        $(pageManager.buildScrollButton).on("click", () => gameManager.build("scroll"));
        $(pageManager.buildGranaryButton).on("click", () => gameManager.build("granary"));
        $(pageManager.buildPitButton).on("click", () => gameManager.build("pit"));
        $(pageManager.buildTentButton).on("click", () => gameManager.build("tent"));
        $(pageManager.buildHutButton).on("click", () => gameManager.build("hut"));
        $(pageManager.buildCampfireButton).on("click", () => gameManager.build("campfire"));
        $(pageManager.buildDolmenButton).on("click", () => gameManager.build("dolmen"));
        // TODO in bronze age
        // $("#build-parthenon-button").on("click",() => gameManager.build("partheon));
        $(pageManager.buildMusicClubButton).on("click", () => gameManager.build("music-club"));
        $(pageManager.buildYogaClubButton).on("click", () => gameManager.build("yoga-club"));
        $(pageManager.buildPalaceButton).on("click", () => gameManager.build("palace"));
        $(pageManager.buildBarrackButton).on("click", () => gameManager.build("barrack"));

        // WORK SETTINGS
        // 1. FARMER
        $(pageManager.remove10FarmerButton).on("click", () => repeatSetWorker(10, gameManager.configManager.farmer, false));
        $(pageManager.removeFarmerButton).on("click", () => gameManager.setWorker(gameManager.configManager.farmer, -1));
        $(pageManager.add10FarmerButton).on("click", () => repeatSetWorker(10, gameManager.configManager.farmer, true));
        $(pageManager.addFarmerButton).on("click", () => gameManager.setWorker(gameManager.configManager.farmer, 1));
        // 2. WOODCUTTER
        $(pageManager.remove10WoodmanButton).on("click", () => repeatSetWorker(10, gameManager.configManager.woodman, false));
        $(pageManager.removeWoodmanButton).on("click", () => gameManager.setWorker(gameManager.configManager.woodman, -1));
        $(pageManager.add10WoodmanButton).on("click", () => repeatSetWorker(10, gameManager.configManager.woodman, true));
        $(pageManager.addWoodmanButton).on("click", () => gameManager.setWorker(gameManager.configManager.woodman, 1));
        // 3. MINER
        $(pageManager.remove10MinerButton).on("click", () => repeatSetWorker(10, gameManager.configManager.miner, false));
        $(pageManager.removeMinerButton).on("click", () => gameManager.setWorker(gameManager.configManager.miner, -1));
        $(pageManager.add10MinerButton).on("click", () => repeatSetWorker(10, gameManager.configManager.miner, true));
        $(pageManager.addMinerButton).on("click", () => gameManager.setWorker(gameManager.configManager.miner, 1));
        // 4. SCIENTIST
        $(pageManager.remove10ScientistButton).on("click", () => repeatSetWorker(10, gameManager.configManager.scientist, false));
        $(pageManager.removeScientistButton).on("click", () => gameManager.setWorker(gameManager.configManager.scientist, -1));
        $(pageManager.add10ScientistButton).on("click", () => repeatSetWorker(10, gameManager.configManager.scientist, true));
        $(pageManager.addScientistButton).on("click", () => gameManager.setWorker(gameManager.configManager.scientist, 1));
        // 5. FUNERAL
        $(pageManager.removeFuneralButton).on("click", () => gameManager.setWorker(gameManager.configManager.funeral, -2));
        $(pageManager.addFuneralButton).on("click", () => gameManager.setWorker(gameManager.configManager.funeral, 2));
        // 6. Dj
        $(pageManager.addDjButton).on("click", () => gameManager.setWorker(gameManager.configManager.dj, 1));
        // 7. Instructor
        $(pageManager.addInstructorButton).on("click", () => gameManager.setWorker(gameManager.configManager.instructor, 1));
        // 8. LEADER
        $(pageManager.addLeaderButton).on("click", () => gameManager.setWorker(gameManager.configManager.leader, 1));
        // 9. WARRIOR
        $(pageManager.addWarriorButton).on("click", () => gameManager.setWorker(gameManager.configManager.warrior, 1));

        function repeatSetWorker(repeatAmount, workerType, increase) {
            let quantity = increase ? 1 : -1;
            for (let i = 0; i < repeatAmount; i++) {
                if (!gameManager.setWorker(workerType, quantity)) {
                    break;
                }
            }
        }

        // TECHNOLOGIES
        // 1. BEGINNING
        $(pageManager.researchChangesButton).on("click", () => gameManager.research("changes"));
        // 2. CHANGES 1
        $(pageManager.researchAgricultureButton).on("click", () => gameManager.research("agriculture"));
        $(pageManager.researchArchitectureButton).on("click", () => gameManager.research("architecture"));
        $(pageManager.researchFuneralButton).on("click", () => gameManager.research("funeral"));
        $(pageManager.researchChanges2Button).on("click", () => gameManager.research("changes2"));
        // 3. CHANGES 2
        $(pageManager.researchLeadershipButton).on("click", () => gameManager.research("leadership"));
        $(pageManager.researchAgriculture2Button).on("click", () => gameManager.research("agriculture2"));
        $(pageManager.researchArchitecture2Button).on("click", () => gameManager.research("architecture2"));
        $(pageManager.researchStoneAgeButton).on("click", () => gameManager.research("stone age"));
        // 4. STONE AGE
        $(pageManager.researchArchitecture3Button).on("click", () => gameManager.research("architecture3"));
        $(pageManager.researchMusicButton).on("click", () => gameManager.research("music"));
        $(pageManager.researchSportButton).on("click", () => gameManager.research("sport"));
        $(pageManager.researchToolButton).on("click", () => gameManager.research("tool"));
        $(pageManager.researchWeaponButton).on("click", () => gameManager.research("weapon"));
        $(pageManager.researchHoeButton).on("click", () => gameManager.research("hoe"));
        $(pageManager.researchAxeButton).on("click", () => gameManager.research("axe"));
        $(pageManager.researchPickaxeButton).on("click", () => gameManager.research("pickaxe"));
        $(pageManager.research2sideScrollButton).on("click", () => gameManager.research("2 side scroll"));
        $(pageManager.researchArchitecture4Button).on("click", () => gameManager.research("architecture4"));
    }
});