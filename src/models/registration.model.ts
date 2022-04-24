export class TeamForm {
    email: string;
    teamName: string;
    teamTag: string;
    phone: number;

    constructor (params: {
        email: string;
        teamName: string;
        teamTag: string;
        phone: number;
    }) {
        this.email = params.email
        this.teamName = params.teamName
        this.teamTag = params.teamTag
        this.phone = params.phone
    }
}

export class Player {
    nickname: string;
    freeFireId: string;
    name: string;

    constructor (params: {
        nickname: string;
        freeFireId: string;
        name: string;
    }) {
        this.nickname = params.nickname
        this.freeFireId = params.freeFireId
        this.name = params.name
    }
}

export class MembersForm {
    player: Player;
    termsAndConditions: string;
    policyPrivacy: string;

    constructor (params: {
        player: Player;
        termsAndConditions: string;
        policyPrivacy: string;
    }) {
        this.player = params.player
        this.termsAndConditions = params.termsAndConditions
        this.policyPrivacy = params.policyPrivacy
    }
}
