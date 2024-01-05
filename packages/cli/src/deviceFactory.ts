import { ColorMode, DisplayDevice, Orientation } from '@epaperjs/core';

export async function getDevice(
    deviceType: string,
    orientation?: Orientation,
    colorMode?: ColorMode
): Promise<DisplayDevice> {
    const factory = deviceMap.get(deviceType);
    if (factory) {
        return await factory(orientation, colorMode);
    }
    throw new Error(`Device type ${deviceType} not recognized`);
}

const deviceMap = new Map<string, (orientation?: Orientation, colorMode?: ColorMode) => Promise<DisplayDevice>>([
    ['npid2-1in54-v2', getNpid21in54V2],
    ['rpi-2in13-v2', getRpi2in13V2],
    ['rpi-2in13-bc', getRpi2In13Bc],
    ['rpi-4in2', getRpi4In2],
    ['rpi-7in5-v2', getRpi7in5V2],
    ['rpi-2in7', getRpi2In7],
    ['rpi-3in7', getRpi3In7],
]);

async function getNpid21in54V2(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Npid21in54V2 } = await import('@epaperjs/npid2-1in54-v2');
        return new Npid21in54V2(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/npid2-1in54-v2, make sure it is installed');
    }
}

async function getRpi2in13V2(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi2In13V2 } = await import('@epaperjs/rpi-2in13-v2');
        return new Rpi2In13V2(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-2in13-v2, make sure it is installed');
    }
}

async function getRpi2In13Bc(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi2In13BC } = await import('@epaperjs/rpi-2in13-bc');
        return new Rpi2In13BC(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-2in13-bc, make sure it is installed');
    }
}

async function getRpi4In2(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi4In2 } = await import('@epaperjs/rpi-4in2');
        return new Rpi4In2(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-4in2, make sure it is installed');
    }
}

async function getRpi7in5V2(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi7In5V2 } = await import('@epaperjs/rpi-7in5-v2');
        return new Rpi7In5V2(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-7in5-v2, make sure it is installed');
    }
}

async function getRpi2In7(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi2In7 } = await import('@epaperjs/rpi-2in7');
        return new Rpi2In7(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-2in7, make sure it is installed');
    }
}

async function getRpi3In7(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi3In7 } = await import('@epaperjs/rpi-3in7');
        return new Rpi3In7(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-3in7, make sure it is installed');
    }
}
